// Static export for GitHub Pages.
//
// Served from the root of a user or organisation site
// (https://switch-to-tide.github.io/), so there is no base path.
// For a project site (https://<user>.github.io/<repo>/) build with
// NEXT_PUBLIC_BASE_PATH=/<repo> instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};
