/** Resolve a bundled-asset path against the app's base URL so it works both at
 *  the dev root and under the GitHub Pages subpath. Absolute http(s) URLs and
 *  data URIs are passed through unchanged (e.g. imported tests with remote
 *  audio/images). */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
