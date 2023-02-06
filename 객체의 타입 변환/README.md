# 타입 변환

특정 타입의 변숫값을 다른 타입의 값으로 변환할 수 있는 기능을 제공합니다. 이를 `타입 변환(type conversion)` 이라고 합니다.

```tsx
let person: object = { name: "park", age: 24 };
person.name; // err발생!
/**  Property 'name' does not exist on type 'object'. */
```

person변수의 타입은 object입니다. 그런데 object 타입은 name 속성을 가지지 않으므로 오류가 발생합니다.

이 오류를 타입 변환 구문을 사용해 해결하면

```tsx
let person: object = { name: "park", age: 24 };
(<{ name: string }>person).name;
```

일시적으로 name속성이 있는 타입 `{name: string}` 타입으로 변환해 person.name속성값을 얻게 했습니다.

# type conversion과 type casting 그리고 type coercion

`타입 변환` 으로 번역되는 세 가지 프로그래밍 용어입니다. type conversion는 type casting과 type coercion을 모두 포함하는 의미로 사용됩니다.

- type casting
  - `명시적` 타입 변환을 의미한다 : 코드에서 직접 표현한다는 의미
- type coercion
  - `암시적` 타입 변환을 의미한다 : 코드에 굳이 표현하지 않아도 컴파일러나 해석기가 알아서 처리한다는 의미

# 타입 단언

타입스크립트는 독특하게 타입 변환이 아닌 `타입 단언` 이라는 용어를 사용합니다. 두 가지 형태가 있습니다.

```tsx
(<타임>객체)(객체 as 타입);
```

자바스크립트의 타입 변환 구문과 구분하기 위해 타입 단언이라는 용어를 사용합니다.

타입 다언의 두 가지 구무은 서로 형태만 다를 뿐 내용상으로는 같습니다.

```tsx
interface INameable {
  name: string;
}

let obj: object = { name: "park" };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1, name2); //park park
```
