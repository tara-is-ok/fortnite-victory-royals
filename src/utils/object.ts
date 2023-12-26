//todo: can purge nested object
export const purgeFalsyValues = (object: { [key: string]: string }) =>
  Object.fromEntries(Object.entries(object).filter(([, v]) => v))
