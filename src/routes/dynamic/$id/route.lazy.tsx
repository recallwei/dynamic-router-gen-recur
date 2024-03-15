import { createLazyFileRoute, useParams } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dynamic/$id')({
  component
})

function component() {
  const params = useParams({
    from: '/dynamic/$id'
  })

  return <div>Hello /dynamic/{params.id}!</div>
}
