import { theme } from 'mdx-deck/themes'

export default {
  ...theme,
  font: '"Open Sans", "Neue Haas Grotesk", sans-serif',
  colors: {
    text: '#222',
    background: '#fff',
    link: '#0ff'
  },
  css: {
    textAlign: 'left'
  },
  h1: {
    fontSize: '2.5rem'
  },
  h2: {
    fontSize: '1.5rem'
  },
  h3: {
    fontSize: '1rem'
  },
  h4: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.25em'
  }
}