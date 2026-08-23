import React from 'react'
import { Box, Container, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { useLocalizedData } from '@/hooks/useLocalizedData'
import VisitorCounter from '../VisitorCounter'

const Footer: React.FC = () => {
  const { siteOwner } = useLocalizedData()
  const footerBg = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="footer"
      w="full"
      bg={footerBg}
      py={[6, 8]}
      mt={[6, 8]}
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={[3, 4]} textAlign="center">
          <VisitorCounter />
          <Text
            fontSize={["2xs", "xs"]}
            color={textColor}
          >
            © {new Date().getFullYear()} {siteOwner.name.display}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
