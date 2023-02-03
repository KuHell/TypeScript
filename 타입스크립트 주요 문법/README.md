타입스크립트는 ESNext 문법을 지원하므로 타입스크립트를 다룰려면 ESNext 문법을 알아야 합니다. 그리고 타입스크립트의 고유 문법도 있습니다. 두 가지 문법을 구분해서 알아 봅시다.

# ESNext의 주요 문법

## 비구조화 할당

비구조화 할당은 객체와 배열에 적용할 수 있습니다. 비구조화 할당을 적용한 예입니다.

```jsx
let person = { name: "KuHell", age: 24 };
let { name, age } = person;

let array = [1, 2, 3, 4];
let [head, ...rest] = array;

let a = 1,
  b = 2;
[a, b] = [b, a];
```

### let {name, age} = person

- person객체의 name과 age속성을 비구조화 할당을 통해 쉽게 각 멤버를 얻습니다.

```jsx
(name = "kuHell"), (age = 24);
```

### let [head, ...rest] = array

- 배열에 비구조화 할당을 적용한 예입니다. 배열에서 첫 번째 요소와 나머지 요소를 비구조화 할당을 통해 쉽게 분리해서 엇습니다.

```jsx
(head = 1), (rest = [2, 3, 4]);
```

### [a, b] = [b, a]

- a와 b의 값을 서로 교환(swap)하는 예입니다.

```jsx
(a = 2), (b = 1);
```

## 화살표 함수

자바스크립트에서 함수를 선언할 때는 function 키워드를 사용합니다. 그런데 ESNext에서는 function키워드 외에도 화살표(⇒)로 함수를 선언할 수 있습니다. 화살표로 만든 함수를 화살표 함수 (arrow function)라고 합니다.

```jsx
function add(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;
```

코드는 될 수 있으면 간결하게 작성해야 읽기 좋습니다. 화살표 함수를 사용하면 function키워드 방식보다 코드를 간결하게 만들 수 있습니다.

> _컴퓨터가 이해할 수 있는 코드는 어느 바보나 다 짤 수 있다.
> 좋은 프로그래머는 사람이 이해할 수 있는 코드를 짠다._

## 클래스

ESNext는 클래스라는 기능을 제공해 객체지향 프로그래밍을 지원합니다. 프로그래밍 언어가 `캡술화` 와 `상속` `다형성` 이라는 세 가지 요소를 지원합니다. 객체지향 프로그래밍의 세 가지 요소의 예 입니다.

```tsx
abstract class Animal {
  constructor(public name?: string, public age?: number) {}
  abstract say(): string;
}

class Cat extends Animal {
  say() {
    return "야옹";
  }
}

class Dog extends Animal {
  say() {
    return "멍멍";
  }
}

let animals: Animal[] = [new Cat("야옹이", 2), new Dog("멍멍이", 3)];
let sounds = animals.map((a) => a.say());
```

ES5 자바스크립트로는 이러한 형태로 코드를 작성하지 못합니다.

## 모듈

모듈을 사용하면 코드를 여러 개 파일로 분할해서 작성할 수 있습니다. 변수, 함수, 클래스등에 export 키워드를 사용해 모듈로 만들면 다른 파일에서도 사용할 수 있습니다. import키워드로 모듈을 가져와서사용할 수 있습니다.

```tsx
import * as fs from "fs";
export function writeFile(filepath: string, content: any) {
  fs.writeFile(filepath, content, (err) => {
    err && console.log("error", err);
  });
}
```

## Promise와 async/await 구문

비동기 콜백 함수를 상대적으로 쉽게 구현할 목적으로 만들어졌습니다.

```tsx
async function get() {
  let values = [];
  values.push(await Promise.resolve(1));
  values.push(await Promise.resolve(2));
  values.push(await Promise.resolve(3));
  values.push(await Promise.resolve(4));

  return values;
}
get().then((values) => console.log(values));
```

async를 사용한 함수는 본문에서 await키워드를 사용할 수 있습니다. get이 반환한 Promise객체는 then 메서드를 호출해 실제값을 얻을 수 있습니다.

# 타입스크립트 고유의 문법

## 타입 주석과 타입 추론

콜론(:)과 타입 이름이 있습니다. 이것을 `타입 주석(type annotation)` 이라고 합니다.

```tsx
let n: number = 1;
let m = 2;
```

타입스크립트는 타입 부분을 생략할 수도 있습니다. 타입스크립트는 변수의 타입 부분이 생략되면 대입 연산자의 오른쪽 값을 분석해 변수의 타입을 결정합니다. 이를 `타입 추론` 이라고 합니다. 자바스크립트로 작성된 `.js` 파일을 확장자만 `.ts`로 바꾸면 타입스크립트 환경에서도 바로 동작합니다.

## 인터페이스

다음 코드의 인터페이스 구문은 타입이 있는 언어를 경험해 본 독자라면 낯설지 않을 것입니다.

```tsx
interface Person {
  name: string;
  age?: number;
}

let person: Person = { name: "KuHell" };
```

## 튜플

튜플은 물리적으로 배열과 같습니다. 하지만

- 배열에 저장되는 아이템의 데이터 타입이 모두 같으면 배열
- 배열에 저장되는 아이템의 데이터 타입이 다르면 튜플

```tsx
let numberArray: number[] = [1, 2, 3];
let tuple: [boolean, number, string] = [true, 1, "ok"];
```

## 제네릭 타입

제네릭 타입은 다양한 타입을 한꺼번에 취급할 수 있게 해줍니다.

```tsx
class Container<T> {
  constructor(public value: T) {}
}
let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>("KuHell");
```

## 대수 타입

ADT란 추상 데이터 타입(abstract data type)을 의ㅣ하기도 하지만 대수 타입(algebraic data type)이라는 의미로도 사용됩니다.

```tsx
type NumberOrString = number | string;
type AnimalAndPerson = Animal & Pserson;
```
