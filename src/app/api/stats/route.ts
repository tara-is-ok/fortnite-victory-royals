import axios from 'axios'
import { NextResponse } from 'next/server'

import { apiBaseUrl, apiKey } from '@/utils/const'

export const GET = async (req: Request) => {
  const { search } = new URL(req.url)
  const result = await axios
    .get(`${apiBaseUrl}/stats/br/v2${search}`, {
      headers: { authorization: apiKey },
    })
    .then((res) => res.data)
    .catch((e) => e)
  return NextResponse.json(result)
}
