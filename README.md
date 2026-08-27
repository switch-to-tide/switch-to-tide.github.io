# terminal-ide-site

The landing page for tide, built with Next.js and exported as static files for
GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # writes ./out
```

`out/` is what Pages serves; the workflow in `.github/workflows/deploy.yml`
builds and publishes it on every push to `main`. Enable Pages for the
repository once, with **Settings → Pages → Source: GitHub Actions**.

The terminal pictures in `app/screens.js` are not mockups: they were captured
from a running tide session, one entry per cell colour. Regenerate them by
running the capture script against a checkout of the editor.

It is built for a site served from the root, such as
`https://switch-to-tide.github.io/`. For a project site under a repository path,
build with `NEXT_PUBLIC_BASE_PATH=/<repo-name>`.
