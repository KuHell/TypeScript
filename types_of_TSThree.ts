//변수의 타입을 미리 알지 못 할 경우 사용한다.
let a :unknown;
if(typeof a === 'number') {
  let b = a + 1
}
if(typeof a === 'string') {
  let b = a.toUpperCase();
}

//void : 아무것도 return하지 않는 함수
function hello() {
  console.log('x')
}
const y = hello()

//never
function hello2(name :string | number) {
  if(typeof name === 'string') {
    name
  }else if (typeof name ==='number') {
    name
  }else {
    name
  }
}

type Add = (a :number, b :number) => number;
const add :Add = (a, b) => a + b