import { useEffect, useState } from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

type CounterResponse = { value?: number }
const storageKey = 'portfolio-liked'

const LikeSection = () => {
  const { t } = useTranslation()
  const [liked, setLiked] = useState(() => localStorage.getItem(storageKey) === 'true')
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const namespace = (import.meta.env.VITE_COUNTER_NAMESPACE || window.location.hostname || 'portfolio')
    .replace(/[^a-zA-Z0-9.-]/g, '-')
  const baseUrl = `https://counterapi.com/api/${encodeURIComponent(namespace)}/like/home`

  useEffect(() => {
    fetch(`${baseUrl}?readOnly=true`)
      .then((response) => response.ok ? response.json() as Promise<CounterResponse> : Promise.reject())
      .then((data) => typeof data.value === 'number' && setCount(data.value))
      .catch(() => setCount(null))
  }, [baseUrl])

  const handleLike = async () => {
    if (liked || loading) return
    setLoading(true)
    try {
      const response = await fetch(baseUrl)
      if (!response.ok) throw new Error('Unable to save like')
      const data = await response.json() as CounterResponse
      if (typeof data.value === 'number') setCount(data.value)
      localStorage.setItem(storageKey, 'true')
      setLiked(true)
    } catch {
      // Keep the interaction usable without showing a broken count.
      setCount(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLike}
      isLoading={loading}
      isDisabled={liked}
      leftIcon={liked ? <FaHeart /> : <FaRegHeart />}
      variant="ghost"
      size="sm"
      borderRadius="full"
      color="var(--secondary-text)"
      px={3}
      _hover={{ color: 'var(--text-color)', bg: 'var(--hover-color)' }}
      _disabled={{ opacity: 1, cursor: 'default' }}
      aria-label={liked ? t('like.liked') : t('like.button')}
    >
      <HStack spacing={2}>
        <Text fontSize="xs">{liked ? t('like.liked') : t('like.button')}</Text>
        {count !== null && <Text fontSize="xs" opacity={0.65}>{count.toLocaleString()}</Text>}
      </HStack>
    </Button>
  )
}

export default LikeSection
