type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint: SuperPrint = (arr) => arr[0]

const z = superPrint([1, 2, 3, 4])
const x = superPrint([true, false, true])

