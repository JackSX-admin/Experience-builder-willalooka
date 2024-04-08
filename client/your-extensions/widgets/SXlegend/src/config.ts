import { type ImmutableObject } from 'C:/Users/JackHann/EXB/client/jimu-core'
import { type BackgroundStyle } from 'C:/Users/JackHann/EXB/client/jimu-ui'

export interface Style {
  useCustom: true
  background: BackgroundStyle
  fontColor: string
}

export interface Config {
  showBaseMap?: boolean
  cardStyle?: boolean
  cardLayout?: 'auto' | 'side-by-side' | 'stack'
  style: Style
}

export type IMConfig = ImmutableObject<Config>
