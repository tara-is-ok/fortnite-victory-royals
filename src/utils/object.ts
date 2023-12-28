type Obj = { [key: string]: string | null }

//todo: can purge nested object
export const purgeFalsyValues = (object: Obj) =>
  Object.fromEntries(Object.entries(object).filter(([, v]) => v))

export const hasUsername = (object: Obj) => 'name' in object
