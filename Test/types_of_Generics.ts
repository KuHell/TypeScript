type SuperPrint2 = <T, M>(a: T[], b:M) => T

const superPrint2: SuperPrint2 = (a) => a[0]

const f = superPrint2([1, 2, 3, 4], 'x')
const v = superPrint2([true, false, true])

