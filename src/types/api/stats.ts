export type StatsResponse = {
  status: number
  data: Data
}
export type Data = {
  account: Account
  battlePass: BattlePass
  image?: null
  stats: Stats
}
export type Account = {
  id: string
  name: string
}
export type BattlePass = {
  level: number
  progress: number
}
export type Stats = {
  all: AllOrGamepad
  keyboardMouse?: null
  gamepad: AllOrGamepad
  touch?: null
}
export type AllOrGamepad = {
  overall: Overall
  solo: Solo
  duo: Duo
  trio?: null
  squad: Squad
  ltm: Ltm
}
export type Overall = {
  score: number
  scorePerMin: number
  scorePerMatch: number
  wins: number
  top3: number
  top5: number
  top6: number
  top10: number
  top12: number
  top25: number
  kills: number
  killsPerMin: number
  killsPerMatch: number
  deaths: number
  kd: number
  matches: number
  winRate: number
  minutesPlayed: number
  playersOutlived: number
  lastModified: string
}
export type Solo = {
  score: number
  scorePerMin: number
  scorePerMatch: number
  wins: number
  top10: number
  top25: number
  kills: number
  killsPerMin: number
  killsPerMatch: number
  deaths: number
  kd: number
  matches: number
  winRate: number
  minutesPlayed: number
  playersOutlived: number
  lastModified: string
}
export type Duo = {
  score: number
  scorePerMin: number
  scorePerMatch: number
  wins: number
  top5: number
  top12: number
  kills: number
  killsPerMin: number
  killsPerMatch: number
  deaths: number
  kd: number
  matches: number
  winRate: number
  minutesPlayed: number
  playersOutlived: number
  lastModified: string
}
export type Squad = {
  score: number
  scorePerMin: number
  scorePerMatch: number
  wins: number
  top3: number
  top6: number
  kills: number
  killsPerMin: number
  killsPerMatch: number
  deaths: number
  kd: number
  matches: number
  winRate: number
  minutesPlayed: number
  playersOutlived: number
  lastModified: string
}
export type Ltm = {
  score: number
  scorePerMin: number
  scorePerMatch: number
  wins: number
  kills: number
  killsPerMin: number
  killsPerMatch: number
  deaths: number
  kd: number
  matches: number
  winRate: number
  minutesPlayed: number
  playersOutlived: number
  lastModified: string
}

export type StatsError = {
  data: ErrorData
  status: number
  statusText: string
  headers: Headers
  config: Config
}
export type ErrorData = {
  message: string
  name: string
  stack: string
  config: Config1
  code: string
  status: number
}
export type Config1 = {
  transitional: Transitional
  adapter?: string[] | null
  transformRequest?: null[] | null
  transformResponse?: null[] | null
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: Headers1
  method: string
  url: string
}
export type Transitional = {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}
export type Headers1 = {
  Accept: string
  authorization: string
}
export type Headers = {
  connection: string
  date: string
  vary: string
}
export type Config = {
  transitional: Transitional
  adapter?: string[] | null
  transformRequest?: null[] | null
  transformResponse?: null[] | null
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: Headers2
  url: string
  method: string
}
export type Headers2 = {
  Accept: string
}
