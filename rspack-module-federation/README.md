# Module federation 2.0 with RSPack

From https://module-federation.io/

## Run project

Remote (`./federation_provider`):

```bash
npm ci
# dev
npm run dev
# prod
npm run build; npm run serve
```

Host (`./federation_consumer`):

```bash
npm ci
# dev
npm run dev
# prod
npm run build; npm run serve
```

## Features

- Error handling (prevents that `remote` errors crash the `consumer` application):
  - Synchronous errors at rendering `remote`: `ErrorBoundary` catches it
  - Synchronous errors outside of rendering `remote`: `ErrorBoundary` catches it, when the `remote` is loaded with `React.lazy`
