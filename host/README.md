# modern-react-spa

The goal of this repository is to provide a minimal setup to SPAs using React, following a set of principles.

## Principles

This repository is heavily inspired on Remix and on the philisophy behing that project. As such, it encourages the following:

- The UI layer opeartes decoupled from the business logic. This is achieved buy lifting the data-fetching and manipulation to the route level, and encouraging the use of pure components. Instead of performing data fetching inside `useEffect`, making the UI components hard to reason about, test, debug and reuse, it happens at route level.
- The API layer is typed and encapsuleted into its own module. The module can be autogenerated from backend API definition schemas, such as OpenAPI. That means that component can reach for the API module, and achieve type safety.
- Routing is defined explicity in a centralized module, `routes/_config.tsx`. All the app's routes, data manipulation, fallbacks and redirects are handled in a central place for clarity.
- Testing:...
- Shared state:
- CSS:
- ...

## Tech-stack

- [React](https://react.dev/): UI-layer.
- [TypeScript](https://www.typescriptlang.org/): type safety and DX.
- [Vite](https://vitejs.dev/): build tool.
- [Storybook](https://storybook.js.org/): visual tests and developing the UIs in isolation.
- [Tailwind](https://tailwindcss.com/): CSS framework.
- [React-Router](https://reactrouter.com/en/main): client-side routing in React, with data-fetching and manipulation, error-handling...
- [Vitest](https://vitest.dev/): unit tests.
- [React Testing Library](https://github.com/testing-library/react-testing-library): component testing, that tests the components from the user perspective, instead of through implementation details.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list