# Lazy-loaded-monorepo

The following micro-frontend architecture is based on a Turbo monorepo, that in conjuction with React.lazy and Suspense, its used to compose a micro-frontend from a dynamic JS object (representing the UI and data).

There is `react-router-dom` v6 cross dependency between the `host` and `domain1` (which works without extra config):

- `host`: creates the `browserRouter` and instanciates the `RouterProvider`
- `domain1`: import `<Link>` component from `react-router-dom`, which works seamlessly when rendered within `host`.

Related blog posts:

- [Creating a Component Library using Vite's library mode](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
