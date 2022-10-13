# Geneticure.com

## Folders of note

-   `/public/img`: All the images used on the site.
-   `/src/pages`: Each file represents one of the routes within geneticure.com, e.g. `rdn.mdx` is `geneticure.com/rdn`. Note that `index.astro` is `geneticure.com/`.
-   `/src/sections`: Parts of the above pages.
-   `/src/text`: Things that are displayed in lists or tables (e.g. citations, FAQs, patient quotes, etc.).

## Dev stuff

### Styleguide

See [styleguide](gce-lib/styleguide.md)

### Installation

Note that `gce-lib` is both a Git submodule and a devDependency in `package.json`. This way `npm install` also installs all the dependencies of `gce-lib`.
