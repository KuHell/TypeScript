type SuperPrint = {
  (arr: number[]): void
  (arr: boolean[]): void
}

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => {
    console.log(i)
  });
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])

