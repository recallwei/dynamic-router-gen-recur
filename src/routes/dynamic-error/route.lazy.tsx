import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dynamic-error')({
  component: () => <div>Hello /dynamic-error!</div>
})