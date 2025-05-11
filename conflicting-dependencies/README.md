# conflicting-dependencies

`host-lodash4` package imports the other packages.

`package-lodash4`: built together with `host-lodash4`, depends on lodash `4.17.21`
`package-lodash3`: built together with `host`, depends on lodash `3.0.1`
`package-prebuilt-lodash4`: TS project built with Vite. The compiled package output includes the lodash version `4.17.21`

When the code is built together with `host-lodash4` (`package-lodash4` and `package-lodash3`), the NPM package resolution kicks in installing lodash `4.17.21`.
This means that `package-lodash3` will fail at runtime.

Since `package-prebuilt-lodash4` is built with Vite before its imported as a package by `host-lodash4`, its version of lodash is included in the bundle.
This makes the final `host-lodash4`'s bundle bigger since it has to import 2 versions of lodash, but it prevents conflicts.

_IMPORTANT_: `npm` only checks the `peerDependencies` requirements with installing a package from package repository.

When installing the package locally through `npm i -s ../package-prebuilt-lodash4` (or other methods), conflicting peerDependencies DO NOT show up.

Use the following command to check for incompatible peer dependencies:

```bash
 npx check-peer-dependencies --npm
```
