import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Link to="/dynamic">dynamic</Link>
        <Link
          to="/dynamic/$id"
          params={{
            id: 'test'
          }}
        >
          dynamic/test
        </Link>
        <Link to="/dynamic-error">dynamic-error</Link>
        <Link
          to="/dynamic-error/$id"
          params={{
            id: 'test'
          }}
        >
          dynamic-error/test
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
})
