export interface Drug {
  name: string
  quantity: number
  dose: string
  instruction: string
}

//isNormal should return true
export interface Test {
  name: string
  result?: string
}

export interface Image {
  name: string
  result?: string
  isNormal?: boolean
}
