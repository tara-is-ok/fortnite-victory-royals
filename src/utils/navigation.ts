export const navigations = [
  { name: 'Victory royals', href: '/wins' },
  { name: 'Stats', href: '/stats' },
]

//todo: strict type
type Params = {
  [key: string]: string | string[]
}

export const paramsSerializer = (params: Params) =>
  Object.keys(params)
    .filter((p) => params[p])
    .flatMap((p) => {
      if (params[p] instanceof Array) {
        //note: 値が配列の時は値毎に処理を回す
        return (params[p] as string[]).map(
          (v: string) => `${encodeURIComponent(p)}=${encodeURIComponent(v)}`,
        )
      }
      return `${encodeURIComponent(p)}=${encodeURIComponent(
        params[p] as string,
      )}`
    })
    .join('&')
