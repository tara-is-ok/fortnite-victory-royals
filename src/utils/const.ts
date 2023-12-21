export const navigations = [
  { name: 'Victory royals', href: '/wins' },
  { name: 'Stats', href: '/stats' },
]

export const apiKey = process.env.NEXT_PUBLIC_API_KEY
//中間API
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

/**
 * @deprecated
 * endpoint
 */
export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
