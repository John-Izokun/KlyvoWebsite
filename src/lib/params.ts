export type Params = Record<string, string>

export function parseParams(search: string): Params {
  const out: Params = {}
  const usp = new URLSearchParams(search.startsWith('?') ? search : `?${search}`)
  usp.forEach((value, key) => {
    out[key] = value
  })
  return out
}
