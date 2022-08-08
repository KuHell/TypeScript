//변수의 타입을 미리 알지 못 할 경우 사용한다.
let a :unknown;
if(typeof a === 'number') {
  let b = a + 1
}
if(typeof a === 'string') {
  let b = a.toUpperCase();
}

