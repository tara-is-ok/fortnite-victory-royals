type AccountType = 'epic' | 'psn' | 'xbl'
type TimeWindow = 'season' | 'lifetime'
type Image = 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none'
export type StatsParams = {
  name?: string
  accountType?: AccountType
  timeWindow?: TimeWindow
  image?: Image
}
