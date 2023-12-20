import axios from 'axios'
import { NextResponse } from 'next/server'

import { apiKey, baseUrl } from '@/utils/const'

export const GET = async () => {
  const result = await axios
    .get(`${baseUrl}/stats/br/v2`, {
      params: { name: 'tensai_victory', accountType: 'psn' },
      headers: { authorization: apiKey },
    })
    .then((res) => res.data)
    .catch((e) => e)
  return NextResponse.json(result)
}
