# conflicting-dependencies

`host` package imports the other packages.

`packageA`: built together with `host`, depends on lodash `4.17.21`
`packageB`: built together with `host`, depends on lodash `3.0.1`
`packageC`: TS project built with Vite. The compiled package output includes the lodash version `4.17.21`

When the code is built together with `host` (`packageA` and `packageB`), the NPM package resolution kicks in installing lodash `4.17.21`.
This means that `packageB` will fail at runtime.

Since `packageC` is built with Vite before its imported as a package by `host`, its version of lodash is included in the bundle.
This makes the final `host`'s bundle bigger since it has to import 2 versions of lodash, but it prevents conflicts.
