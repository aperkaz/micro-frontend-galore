# conflicting-dependencies-react

`host` package imports the other packages.

`packageA`: built together with `host`, depends on react `19.1.0`
`packageB`: built together with `host`, depends on react `18.1.0`
`packageC`: TS project built with Vite. The compiled package output includes the react version `18.1.0`

When the code is built together with `host` (`packageA` and `packageB`), the NPM package resolution kicks in installing react `19.1.0`.
This means that `packageB` could fail at runtime.

Since `packageC` is built with Vite before its imported as a package by `host`, its version of react is included in the bundle.
This makes the final `host`'s bundle bigger since it has to import 2 versions of react.
