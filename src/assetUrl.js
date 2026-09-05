// Prefix a root-relative public path (e.g. '/invites/hibiscus.jpeg') with
// the build's base path, so hand-written URLs in JSX and content.js still
// resolve when the site is served from a sub-path such as GitHub Pages.
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return path.startsWith('/') ? base + path : path
}
