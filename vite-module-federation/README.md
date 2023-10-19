# vite-module-federation [runtime-sharing]

The following micro-frontend architecture is based on [Vite Module Federation](https://github.com/originjs/vite-plugin-federation).

Related blog posts:

- [React Micro-Frontends using Vite](https://dev.to/abhi0498/react-micro-frontends-using-vite-30ah)
- [Module Federation—Federated Application Architectures](https://rangle.io/blog/module-federation-federated-application-architectures)

## Instructions

1. Run `npm ci` in: `host`, `remote1` and `remote2` directories.
2. Run `npm run build` in: `remote1` and `remote2` directories.
3. Run `npm run dev` in: `host`, `remote1` and `remote2` directories.
4. Access the host application in http://localhost:5000
5. Perform changes in `remote1` or `remote2`, run `npm run build` and `npm run dev` in those too.
6. The host app should re-load the latest `remote` modules, without having to re-build or deploy.

To run the app as in prod, execute `npm run build` and `npm run preview` on the `host` (after building and serving the `remotes`).

## Pros

- Runtime code sharing (new versions of remotes can be injected into remote without re-deploying the host)

## Cons

- Typescript support (havent managed to set up correctly, types of remotes are lost)
- Unit testing (what the host may render in production at any given time becomes harder to test)
- Runtime crashed (remotes may be not available, breaking changes, [collisions with library versions](https://stackoverflow.com/questions/65634232/how-does-module-federation-choose-which-dependency-version-to-use), [incompatible lib versions](https://www.angulararchitects.io/en/blog/getting-out-of-version-mismatch-hell-with-module-federation/)...)
- Dynamic imports cat not be fully parametrized, as static code analysis is needed ([doc explanation](https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations))
- Versioning
