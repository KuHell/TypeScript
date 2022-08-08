//화살표 함수
const playerMaker1 = (name :string) :Player => ({name})
const GoGoGo = playerMaker1('kuhell')
GoGoGo.age = 25
GoGoGo.name = 30  //error name의 type = string

//readOnly
GoGoGo.name = 'snag'  //변경 가능
type PlayerRead = {
  readonly name :string,
  age ?:number
}
const playerMaker2 = (name :string) :PlayerRead => ({name})
const readPlayer = playerMaker2('kuhell')
readPlayer.name = 'las'   //읽기전용 속성으로 type선언 했기 때문에 변경 error발생