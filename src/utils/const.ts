import gif1 from '../../public/images/1.gif'
import gif2 from '../../public/images/2.gif'
import gif3 from '../../public/images/3.gif'
import gif4 from '../../public/images/4.gif'
import gif5 from '../../public/images/5.gif'
import gif8 from '../../public/images/8.gif'
import gif9 from '../../public/images/9.gif'
import gif10 from '../../public/images/10.gif'
import gif11 from '../../public/images/11.gif'
import gif12 from '../../public/images/12.gif'
import gif13 from '../../public/images/13.webp'
import gif14 from '../../public/images/14.gif'
import gif15 from '../../public/images/15.gif'
import gif16 from '../../public/images/16.gif'
import gif17 from '../../public/images/17.gif'
import gif18 from '../../public/images/18.gif'
import gif19 from '../../public/images/19.gif'

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

export const gifs = [
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif8,
  gif9,
  gif10,
  gif11,
  gif12,
  gif13,
  gif14,
  gif15,
  gif16,
  gif17,
  gif18,
  gif19,
]
