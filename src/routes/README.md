# TanStack Router Configuration

This directory contains the route definitions for the application using TanStack Router.

## Route Structure

```typescript
// Example route structure
const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "posts",
  loader: () => queryClient.ensureQueryData(postsQuery()),
  component: PostsPage,
});

const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: "$postId",
  loader: ({ params: { postId } }) =>
    queryClient.ensureQueryData(postQuery(postId)),
  component: PostPage,
});
```

## Features

- Type-safe routing
- Automatic code splitting
- Data loading with loaders
- Search param handling
- Nested layouts
- Route guards