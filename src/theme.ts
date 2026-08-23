import { extendTheme } from '@chakra-ui/react'

const monochrome = {
  50: '#f5f5f3', 100: '#e8e8e5', 200: '#d4d4d0', 300: '#b8b8b2',
  400: '#8d8d87', 500: '#676762', 600: '#4b4b47', 700: '#343432',
  800: '#202020', 900: '#111111',
}

const theme = extendTheme({
  colors: {
    cyan: monochrome, blue: monochrome, yellow: monochrome, orange: monochrome,
    red: monochrome, green: monochrome, purple: monochrome, pink: monochrome,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: '"SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    heading: '"SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    mono: '"SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  },
  styles: {
    global: {
      body: {
        bg: 'var(--bg-color)',
        color: 'var(--text-color)',
        fontSize: '14px',
        lineHeight: 1.6,
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        borderRadius: '4px',
      },
      variants: {
        solid: {
          bg: 'var(--accent-color)',
          color: 'var(--bg-color)',
          _hover: {
            bg: 'var(--accent-color)',
            opacity: 0.9,
          },
        },
        outline: {
          border: '1px solid',
          borderColor: 'var(--border-color)',
          color: 'var(--text-color)',
          _hover: {
            bg: 'var(--hover-color)',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'var(--accent-color)',
        _hover: {
          textDecoration: 'none',
          opacity: 0.9,
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        color: 'var(--text-color)',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'var(--card-bg)',
          border: '1px solid',
          borderColor: 'var(--border-color)',
          borderRadius: '2px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          _hover: {
            transform: 'translateY(-2px)',
            borderColor: 'var(--strong-border)',
            boxShadow: '5px 5px 0 var(--border-color)',
          },
        },
      },
    },
  },
})

export default theme
