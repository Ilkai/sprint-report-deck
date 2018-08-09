import { theme } from 'mdx-deck/themes'

export default {
  ...theme,
  // add a custom font
  font: '"Neue Haas Grotesk", sans-serif',
  // custom colors
  colors: {
    text: '#222',
    background: '#fff',
    link: '#0ff'
  },
  css: {
    textAlign: 'left'
  }
}