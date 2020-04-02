# Next.js SSG Blog

> A blog engine (experiment) using Next.js (SSG)/Tailwind CSS/Markdown.

## Install

Ensure you have [Node.js](https://nodejs.org/) version 12+, and
[Yarn v1](https://classic.yarnpkg.com/lang/en/) installed.

Install dependencies:

```bash
yarn
```

## Usage

Blog posts are markdown files (i.e. `.md`) in the `blog-posts` folder.

The filename becomes its URL slug prefixed by `/blog`, e.g. a `new-blog-post.md` blog post
will have a URL of `/blog/new-blog-post`.

They have support for these "[front matter](https://jekyllrb.com/docs/front-matter/)" variables:

* `title`: used for the blog post title and page `<title>`
* `description`: used for the `<meta name="description">` of the blog post page

### Start the development server

```bash
yarn dev
```

Note: Go to `http://localhost:3000`.

### Run tests

To check for spelling, insensitive/inconsiderate writing, and linting:

```bash
yarn test
```

### Create a production build

```bash
yarn build
yarn export
```

Note: The generated files will be in the `out` folder.

### Deploy

There is a pre-configured `deploy.yml` GitHub action in the `.github` folder for deployment using
["Deploy to GitHub Pages"](https://github.com/marketplace/actions/deploy-to-github-pages).

Alternatively, you may delete `deploy.yml` and instead deploy the contents of the `out` folder to
whatever hosting you want.

### Adding a blog post

1. Go to the `blog-posts` folder
1. Create a new markdown file, e.g. `new-blog-post.md`

### Editing a blog post

Edit the corresponding markdown file

### Deleting a blog post

* Go to the `blog-posts` folder and delete the `.md` file
* Or, change its `.md` extension to something else
* Or, remove/comment out its `title` variable in its front matter

## License

MIT © Alejandro Beltrán
