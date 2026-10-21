import type { Post } from '../types'

export const posts: Post[] = [
  { id: 1, title: 'Getting Started with React Router', date: '2 October 2026', tags: ['React', 'TypeScript'],
    excerpt: 'How routes turn a single page into a multi-page app.',
    body: 'React Router maps URLs to components. Each page is a component, and links change the URL without reloading the page.' },
  { id: 2, title: 'Design Tokens in CSS', date: '9 October 2026', tags: ['CSS', 'Design'],
    excerpt: 'One source of truth for colours, spacing and radius.',
    body: 'Design tokens are CSS variables copied from the design file. Components use var(--name) instead of hard-coded values.' },
  { id: 3, title: 'Local State with useState', date: '16 October 2026', tags: ['React'],
    excerpt: 'A like button is the smallest useful state example.',
    body: 'useState keeps a value between renders. When the setter runs, React re-renders the component with the new value.' },
  { id: 4, title: 'Testing Components', date: '20 October 2026', tags: ['Vitest', 'Testing'],
    excerpt: 'Arrange, act, assert with React Testing Library.',
    body: 'Render the component, act like a user (click, type), and assert on what the user can see.' },
  { id: 5, title: 'Keyboard Focus Matters', date: '21 October 2026', tags: ['Accessibility', 'CSS'],
    excerpt: 'If you cannot see where you are, you cannot use the page.',
    body: 'A visible :focus-visible outline lets keyboard users see which link or button is active. Test it by pressing Tab through every page.' },
]
