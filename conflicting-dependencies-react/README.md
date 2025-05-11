# conflicting-dependencies-react

`host-react19` and `package-react18` have different versions of react.

`package-react18` externalizes the `react` dependency through Vite, since 2 versions of react cant be loaded simultaneously. The `package-react18` is demo component-library.

_IMPORTANT_: `npm` only checks the `peerDependencies` requirements with installing a package from package repository.

When installing the package locally through `npm i -s ../package-react18` (or other methods), conflicting peerDependencies DO NOT show up.

Use the following command to check for incompatible peer dependencies:

```bash
 npx check-peer-dependencies --npm
```
