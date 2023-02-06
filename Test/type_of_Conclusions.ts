type Player6<E> = {
  name: string,
  extraInfo: E
}
type KuhellExtra = {
  favFood: string
}
type KuhellPlayer = Player6<KuhellExtra>

const kuhell2: KuhellPlayer = {
  name: 'kuhell',
  extraInfo: {
    favFood: ''
  }
}

const hunsman: Player6<null> = {
  name: 'hunsman',
  extraInfo: null
}

