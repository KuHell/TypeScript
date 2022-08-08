let q : number = 1;
let w : string = 'il';
let e : boolean = false;
let r : number[] = [0,1]

const player1 = {
  name : 'kuhell'
}
player1.name = 'kuhell1'

const player2 : {  //age 를 선언 하지 않아서 error발생
  name :string,
  age :number
} = {
  name : 'KuHell'
}
const player3 : {  //age 앞에 '?' 추가  (number or undefined)
  name :string,
  age ?:number
} = {
  name : 'KuHell'
}

if(player3.age < 10) { //age가 undefined일 수도 있어서 발생하는 error

}
if(player3.age && player3.age > 10) {

}

type Age = number;
type Player = { //Type 선언
  name :string,
  age ?:Age
}
const player4 :Player = { //type자리에 위에 선언한 type이 추가 될 수 있다
  name : 'kuhell'
} 


function playerMaker(name :string) :Player { //()안에는 string type이 존재 해야되고 playerMaker함수의 type = Player이다 
  return {
    name : name,
  }
}

const Go = playerMaker()  //error string타입의 name을 넣어 줘야 실행 가능
const GoGo = playerMaker('kuhell')
GoGo.age = 25
