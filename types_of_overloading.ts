type Add = {
  (a: number, b: number): number
  (a: number, b: string): number
}
const add: Add = (a, b) => {
  if(typeof b === 'string') return a
  return a + b
}

//next.js
Router.push({
  path: '/home',
  state: 1
})

.push('/home')
type Push = {
  (path: string): void
  (config: Config): void
}

const push: Push = (config) => {
  if(typeof config === 'string') {console.log(config)}
  else {
    console.log(config.path)
  }
}

type AddNumber = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const addNumber: Add = (a, b, c) => {  //c type이 있을 수도 있고 없을 수도 있다
  return a + b
}

const addNumber1: Add = (a, b, c?:number) => {  //c type이 있을 수도 있고 없을 수도 있다
  if(c) {return a + b + c}
  return a + b
}

addNumber1(1, 2)
addNumber1(1, 2, 3)

