import { useEffect, useMemo, useState } from 'react'
import {
  Badge, Box, Button, Container, Flex, Heading, HStack, IconButton, Input,
  Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid,
  Text, VStack, useClipboard, useColorModeValue,
} from '@chakra-ui/react'
import { CloseIcon, DownloadIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'
import { FaEye, FaFileAlt, FaFilePdf, FaHeart, FaLink, FaRegHeart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

type NoteMeta = {
  title?: string
  description?: string
  date?: string
  category?: string
  categories?: string[]
  tags?: string[]
  featured?: boolean
}

type MarkdownModule = NoteMeta & { body: string }
type Note = NoteMeta & {
  slug: string
  title: string
  kind: 'pdf' | 'markdown'
  url?: string
  body?: string
}

const NOTE_CATEGORIES = [
  'LLM', 'VLM', 'VLA', 'Robotics', 'RL', 'Paper Reading', 'Learning Note',
  'Programming Learning', 'Project Recording',
] as const

const pdfFiles = import.meta.glob('/content/notes/**/*.pdf', {
  eager: true, query: '?url', import: 'default',
}) as Record<string, string>

const metadataFiles = import.meta.glob('/content/notes/**/*.json', {
  eager: true, import: 'default',
}) as Record<string, NoteMeta>

const markdownFiles = import.meta.glob('/content/notes/**/*.md', {
  eager: true, import: 'default',
}) as Record<string, MarkdownModule>

const humanize = (value: string) => value
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, letter => letter.toUpperCase())

const getCategories = (note: NoteMeta) => Array.from(new Set([
  ...(note.categories ?? []),
  ...(note.category ? [note.category] : []),
]))

const pdfNotes: Note[] = Object.entries(pdfFiles).map(([path, url]) => {
  const base = path.replace(/\.pdf$/i, '')
  const slug = base.split('/').pop() ?? base
  const meta = metadataFiles[`${base}.json`] ?? {}
  return { ...meta, slug, title: meta.title ?? humanize(slug), kind: 'pdf', url }
})

const markdownNotes: Note[] = Object.entries(markdownFiles)
  .filter(([path]) => !path.endsWith('/README.md'))
  .map(([path, document]) => {
    const base = path.replace(/\.md$/i, '')
    const slug = base.split('/').pop() ?? base
    const meta = { ...document, ...(metadataFiles[`${base}.json`] ?? {}) }
    return { ...meta, slug, title: meta.title ?? humanize(slug), kind: 'markdown', body: document.body }
  })

const notes: Note[] = [...pdfNotes, ...markdownNotes].sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1
  return (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title)
})

type CounterResponse = { value?: number }
type Counts = Record<string, number>

const getCounterUrl = (action: 'note-view' | 'note-like', slug: string, readOnly = false) => {
  const namespace = (import.meta.env.VITE_COUNTER_NAMESPACE || window.location.hostname || 'portfolio')
    .replace(/[^a-zA-Z0-9.-]/g, '-')
  const base = `https://counterapi.com/api/${encodeURIComponent(namespace)}/${action}/${encodeURIComponent(slug)}`
  return readOnly ? `${base}?readOnly=true` : base
}

const readCount = async (action: 'note-view' | 'note-like', slug: string) => {
  const response = await fetch(getCounterUrl(action, slug, true))
  if (!response.ok) return 0
  const data = await response.json() as CounterResponse
  return typeof data.value === 'number' ? data.value : 0
}

const Notes = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState<Note | null>(() => {
    const slug = new URLSearchParams(window.location.search).get('note')
    return notes.find(note => note.slug === slug) ?? null
  })
  const [views, setViews] = useState<Counts>({})
  const [likes, setLikes] = useState<Counts>({})
  const [liked, setLiked] = useState<Record<string, boolean>>(() => Object.fromEntries(
    notes.map(note => [note.slug, localStorage.getItem(`note-liked:${note.slug}`) === 'true']),
  ))
  const border = useColorModeValue('gray.200', 'gray.700')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'black')
  const shareUrl = selected ? `${window.location.origin}${import.meta.env.BASE_URL}notes?note=${encodeURIComponent(selected.slug)}` : ''
  const { onCopy, hasCopied } = useClipboard(shareUrl)

  useEffect(() => {
    Promise.all(notes.map(async note => {
      const [viewCount, likeCount] = await Promise.all([
        readCount('note-view', note.slug), readCount('note-like', note.slug),
      ])
      return { slug: note.slug, viewCount, likeCount }
    })).then(results => {
      setViews(Object.fromEntries(results.map(item => [item.slug, item.viewCount])))
      setLikes(Object.fromEntries(results.map(item => [item.slug, item.likeCount])))
    }).catch(() => undefined)
  }, [])

  useEffect(() => {
    if (!selected) return
    const sessionKey = `note-viewed:${selected.slug}`
    if (sessionStorage.getItem(sessionKey)) return
    sessionStorage.setItem(sessionKey, 'true')
    fetch(getCounterUrl('note-view', selected.slug))
      .then(response => response.ok ? response.json() as Promise<CounterResponse> : Promise.reject())
      .then(data => typeof data.value === 'number' && setViews(previous => ({ ...previous, [selected.slug]: data.value! })))
      .catch(() => undefined)
  }, [selected])

  const likeNote = async (note: Note) => {
    if (liked[note.slug]) return
    try {
      const response = await fetch(getCounterUrl('note-like', note.slug))
      if (!response.ok) return
      const data = await response.json() as CounterResponse
      localStorage.setItem(`note-liked:${note.slug}`, 'true')
      setLiked(previous => ({ ...previous, [note.slug]: true }))
      if (typeof data.value === 'number') setLikes(previous => ({ ...previous, [note.slug]: data.value! }))
    } catch {
      // Engagement counters are optional and must never block reading.
    }
  }

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    return notes.filter(note => {
      const noteCategories = getCategories(note)
      const matchesCategory = category === 'all' || noteCategories.includes(category)
      const haystack = [note.title, note.description, ...noteCategories, ...(note.tags ?? [])]
        .filter(Boolean).join(' ').toLowerCase()
      return matchesCategory && (!search || haystack.includes(search))
    })
  }, [category, query])

  return (
    <Container maxW="7xl" py={[10, 14]} px={[2, 4, 8]}>
      <VStack align="stretch" spacing={8}>
        <Box>
          <Text fontSize="xs" color={muted} letterSpacing="0.18em" mb={3}>{t('notes.eyebrow')}</Text>
          <Heading size="xl" mb={3}>{t('notes.title')}</Heading>
          <Text color={muted} maxW="2xl">{t('notes.description')}</Text>
        </Box>

        <Flex gap={3} direction={{ base: 'column', md: 'row' }}>
          <HStack flex="1" border="1px solid" borderColor={border} px={3} bg={cardBg}>
            <SearchIcon color={muted} />
            <Input value={query} onChange={event => setQuery(event.target.value)} placeholder={t('notes.search')} border="0" px={1} _focusVisible={{ boxShadow: 'none' }} />
          </HStack>
          <HStack spacing={2} flexWrap="wrap">
            {['all', ...NOTE_CATEGORIES].map(item => (
              <Button key={item} size="sm" variant={category === item ? 'solid' : 'outline'} onClick={() => setCategory(item)}>
                {item === 'all' ? t('notes.all') : item}
              </Button>
            ))}
          </HStack>
        </Flex>

        {notes.length === 0 ? (
          <Text py={16} textAlign="center" color={muted}>{t('notes.empty')}</Text>
        ) : filtered.length === 0 ? (
          <Text py={16} textAlign="center" color={muted}>{t('notes.noResults')}</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={4}>
            {filtered.map(note => (
              <VStack key={note.slug} align="stretch" spacing={4} p={5} border="1px solid" borderColor={border} bg={cardBg} transition="all .18s" _hover={{ borderColor: 'var(--text-color)', transform: 'translateY(-2px)' }}>
                <Flex justify="space-between" align="start">
                  <Box as={note.kind === 'pdf' ? FaFilePdf : FaFileAlt} boxSize={5} />
                  {note.date && <Text fontSize="xs" color={muted}>{note.date}</Text>}
                </Flex>
                <Box flex="1">
                  <Heading size="sm" mb={2}>{note.title}</Heading>
                  {note.description && <Text fontSize="sm" color={muted} noOfLines={3}>{note.description}</Text>}
                </Box>
                <HStack flexWrap="wrap">
                  {getCategories(note).map(item => <Badge key={item} variant="outline">{item}</Badge>)}
                  {(note.tags ?? []).slice(0, 3).map(tag => <Badge key={tag} variant="subtle">{tag}</Badge>)}
                </HStack>
                <Flex align="center" gap={3}>
                  <Button flex="1" size="sm" variant="outline" rightIcon={<ExternalLinkIcon />} onClick={() => setSelected(note)}>{t('notes.open')}</Button>
                  <HStack spacing={1} color={muted} fontSize="xs" flexShrink={0}>
                    <Box as={FaEye} />
                    <Text>{views[note.slug] ?? 0}</Text>
                  </HStack>
                  <Button
                    size="xs" variant="ghost" minW="auto" px={1.5}
                    leftIcon={liked[note.slug] ? <FaHeart /> : <FaRegHeart />}
                    color={liked[note.slug] ? 'var(--text-color)' : muted}
                    onClick={() => likeNote(note)}
                    aria-label={liked[note.slug] ? t('notes.liked') : t('notes.like')}
                  >
                    {likes[note.slug] ?? 0}
                  </Button>
                </Flex>
              </VStack>
            ))}
          </SimpleGrid>
        )}
      </VStack>

      <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)} size="full">
        <ModalOverlay />
        <ModalContent bg="var(--bg-color)">
          <ModalHeader borderBottom="1px solid" borderColor={border}>
            <Flex align="center" gap={{ base: 1, md: 3 }}>
              <Heading size="sm" flex="1" noOfLines={1}>{selected?.title}</Heading>
              {selected?.url && <IconButton as={Link} href={selected.url} download aria-label={t('notes.download')} icon={<DownloadIcon />} size="sm" variant="outline" />}
              <IconButton aria-label={hasCopied ? t('notes.copied') : t('notes.copyLink')} icon={<FaLink />} size="sm" variant="outline" onClick={onCopy} />
              <IconButton aria-label={t('notes.close')} icon={<CloseIcon />} size="sm" variant="ghost" onClick={() => setSelected(null)} />
            </Flex>
          </ModalHeader>
          <ModalBody p={0}>
            {selected?.kind === 'pdf' && <Box as="iframe" title={selected.title} src={selected.url} w="full" h="calc(100vh - 65px)" border="0" bg="white" />}
            {selected?.kind === 'markdown' && (
              <Container maxW="4xl" py={[8, 12]}>
                <Box
                  className="note-markdown"
                  fontSize="sm"
                  lineHeight="1.85"
                  dangerouslySetInnerHTML={{ __html: selected.body ?? '' }}
                  sx={{
                    'h1, h2, h3, h4': { fontWeight: 600, mt: 8, mb: 3, lineHeight: 1.35 },
                    h1: { fontSize: '2xl', mt: 0 }, h2: { fontSize: 'xl', borderBottom: '1px solid var(--border-color)', pb: 2 },
                    h3: { fontSize: 'lg' }, p: { my: 3 }, 'ul, ol': { pl: 6, my: 3 }, li: { my: 1 },
                    blockquote: { borderLeft: '2px solid var(--text-color)', pl: 4, my: 4, color: 'var(--secondary-text)' },
                    pre: { border: '1px solid var(--border-color)', borderRadius: '2px' },
                    table: { w: 'full', borderCollapse: 'collapse', my: 5 },
                    'th, td': { border: '1px solid var(--border-color)', px: 3, py: 2, textAlign: 'left' },
                    a: { textDecoration: 'underline' }, img: { maxW: 'full', my: 5 },
                  }}
                />
              </Container>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Notes
