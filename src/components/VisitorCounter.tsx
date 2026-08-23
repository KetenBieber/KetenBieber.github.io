import { useEffect, useState } from 'react'
import { HStack, Text, Tooltip } from '@chakra-ui/react'

type CounterResponse = { value?: number }

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const namespace = (import.meta.env.VITE_COUNTER_NAMESPACE || window.location.hostname || 'portfolio')
      .replace(/[^a-zA-Z0-9.-]/g, '-')
    const endpoint = `https://counterapi.com/api/${encodeURIComponent(namespace)}/view/site?unique=true`

    fetch(endpoint)
      .then((response) => response.ok ? response.json() as Promise<CounterResponse> : Promise.reject())
      .then((data) => typeof data.value === 'number' && setCount(data.value))
      .catch(() => setCount(null))
  }, [])

  if (count === null) return null

  return (
    <Tooltip label="匿名访客总数（不记录姓名或联系方式）" fontSize="xs" hasArrow>
      <HStack spacing={2} aria-label={`累计 ${count.toLocaleString()} 位访客`}>
        <Text as="span" w="6px" h="6px" borderRadius="full" bg="var(--text-color)" opacity={0.7} />
        <Text fontSize="xs" color="var(--secondary-text)" letterSpacing="wide">
          VISITORS / {count.toLocaleString()}
        </Text>
      </HStack>
    </Tooltip>
  )
}

export default VisitorCounter
