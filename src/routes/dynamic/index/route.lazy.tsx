import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dynamic/')({
  component: () => <div>Hello /dynamic/!</div>
})