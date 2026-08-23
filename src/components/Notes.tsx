import { useMemo, useState } from 'react'
import {
  Badge, Box, Button, Container, Flex, Heading, HStack, IconButton, Input,
  Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid,
  Text, VStack, useClipboard, useColorModeValue,
} from '@chakra-ui/react'
import { CloseIcon, DownloadIcon, ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'
import { FaFilePdf, FaLink } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

type NoteMeta = {
  title?: string
  description?: string
  date?: string
  category?: string
  tags?: string[]
  featured?: boolean
}

type Note = NoteMeta & { slug: string; title: string; url: string }

const pdfFiles = import.meta.glob('/content/notes/**/*.pdf', {
  eager: true, query: '?url', import: 'default',
}) as Record<string, string>

const metadataFiles = import.meta.glob('/content/notes/**/*.json', {
  eager: true, import: 'default',
}) as Record<string, NoteMeta>

const humanize = (value: string) => value
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, letter => letter.toUpperCase())

const notes: Note[] = Object.entries(pdfFiles).map(([path, url]) => {
  const base = path.replace(/\.pdf$/i, '')
  const slug = base.split('/').pop() ?? base
  const meta = metadataFiles[`${base}.json`] ?? {}
  return { ...meta, slug, title: meta.title ?? humanize(slug), url }
}).sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1
  return (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title)
})

const Notes = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState<Note | null>(() => {
    const slug = new URLSearchParams(window.location.search).get('note')
    return notes.find(note => note.slug === slug) ?? null
  })
  const border = useColorModeValue('gray.200', 'gray.700')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'black')
  const shareUrl = selected ? `${window.location.origin}${import.meta.env.BASE_URL}notes?note=${encodeURIComponent(selected.slug)}` : ''
  const { onCopy, hasCopied } = useClipboard(shareUrl)

  const categories = useMemo(
    () => Array.from(new Set(notes.map(note => note.category).filter(Boolean) as string[])),
    [],
  )
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    return notes.filter(note => {
      const matchesCategory = category === 'all' || note.category === category
      const haystack = [note.title, note.description, note.category, ...(note.tags ?? [])]
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
            {['all', ...categories].map(item => (
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
                  <Box as={FaFilePdf} boxSize={5} />
                  {note.date && <Text fontSize="xs" color={muted}>{note.date}</Text>}
                </Flex>
                <Box flex="1">
                  <Heading size="sm" mb={2}>{note.title}</Heading>
                  {note.description && <Text fontSize="sm" color={muted} noOfLines={3}>{note.description}</Text>}
                </Box>
                <HStack flexWrap="wrap">
                  {note.category && <Badge variant="outline">{note.category}</Badge>}
                  {(note.tags ?? []).slice(0, 3).map(tag => <Badge key={tag} variant="subtle">{tag}</Badge>)}
                </HStack>
                <Button size="sm" variant="outline" rightIcon={<ExternalLinkIcon />} onClick={() => setSelected(note)}>{t('notes.open')}</Button>
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
              <IconButton as={Link} href={selected?.url} download aria-label={t('notes.download')} icon={<DownloadIcon />} size="sm" variant="outline" />
              <IconButton aria-label={hasCopied ? t('notes.copied') : t('notes.copyLink')} icon={<FaLink />} size="sm" variant="outline" onClick={onCopy} />
              <IconButton aria-label={t('notes.close')} icon={<CloseIcon />} size="sm" variant="ghost" onClick={() => setSelected(null)} />
            </Flex>
          </ModalHeader>
          <ModalBody p={0}>
            {selected && <Box as="iframe" title={selected.title} src={selected.url} w="full" h="calc(100vh - 65px)" border="0" bg="white" />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Notes
