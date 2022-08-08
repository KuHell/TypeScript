//readOnly
GoGoGo.name = 'snag'  //변경 가능
type PlayerRead = {
  readonly name :string,
  age ?:number
}
const playerMaker2 = (name :string) :PlayerRead => ({name})
const readPlayer = playerMaker2('kuhell')
readPlayer.name = 'las'   //읽기전용 속성으로 type선언 했기 때문에 변경 error발생

const numbers :readonly number[] = [1, 2, 3, 4]
numbers.push(1)

const player5 :[string, number, boolean] = ['kuhell', 1, true]
player5[0] = 0 //player5[0] = string으로 type선언 되어 있어서 number적용 error
