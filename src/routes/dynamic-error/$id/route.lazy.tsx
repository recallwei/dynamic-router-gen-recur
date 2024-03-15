import { createLazyFileRoute, useParams } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dynamic-error/$id')({
  component
})

function component() {
  const params = useParams({
    from: '/dynamic-error/$id'
  })

  return <div>Hello /dynamic-error/{params.id}!</div>
}
