# 클래스 선언문

타입스크립트는 C++나 자바와 같은 객체지향 언어에서 흔히 볼 수 있는

- class
- private
- public
- protected
- implements
- extend

와 같은 키워드를 제공합니다.

```tsx
class '클래스 이름' {
	[private | protected | public] '속성이름[?]': '속성 타입[...]'
}
```

name과 age라는 속성을 가진 클래스를 선언

```tsx
class Person1 {
  name: string;
  age: number;
}
```

Person1 클래스에 new연산자를 적용해 kuhell이라는 이름의 Person1타입 변수를 만듭니다. kuhell은 name과 age 속성을 가지는 타입입니다.

```tsx
let kuhell: Person1 = new Pserson1();
kuhell.name = "kuhell";
kuhell.age = 24;
console.log(kuhell);
```

# 접근 제한자

클래스의 속성은

- public
  - 클래스 인스턴스를 통해 외부에서 참조가 가능하다
- private
  - 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
- protected
  - 참조 하고있는 자식 클래스 내부에서 참조가 가능하다

와 같은 접근 제한자를 이름 앞에 붙일 수 있습니다. 생략하면 모두 `public` 으로 간주합니다.

# 생성자

타입스크립트 클래스는 constructor라는 이름의 특별한 메서드를 포함하는데, 이를 생성자 라고 합니다. 다른 언어와 다르게 타입스크립트 클래스는 클래스의 속성을 선언할 수 있습니다.

```tsx
class Person2 {
  consructor(public name: string, public age: number) {}
}
```

생성자의 매개변수에 public과 같은 접근 제한자를 붙이면 해당 매개벼수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작합니다.

```tsx
class Person3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}
```

`Person2` 는 `Person3` 를 장황하게 구현된 것을 함축해서 구현한 것입니다.

# 인터페이스 구현

클래스는 인터페이스를 구현할 수 있습니다. 클래스가 인터페이스를 구현할 때는 다음처럼 `implements` 키워드를 사용합니다.

```tsx
class '클래스 이름' implements '인터페이스 이름' {
	...
}
```

인터페이스는 이런 속성이 있어야 한다는 `규약` 에 불과할 뿐 물리적으로 해당 속성을 만들지 않는다는 점입니다. 그래서 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 합니다.

```tsx
// 해당 속성이 있어야 된다는 규약
interface IPerson4 {
  name: string;
  age: number;
}

// 클래스 안에는 반드시 interface가 정의하고 있는 속성을 멤버 속성으로 포함해야 함
class Person4 implements IPerson4 {
  name: string;
  age: number;
}
```

선언하지 않으면 에러 발생

```
class Person4
'Person4' is declared but never used.ts(6196)
Class 'Person4' incorrectly implements interface 'IPerson4'.
  Type 'Person4' is missing the following properties from type 'IPerson4': name, age
```

위에서 본 `Person2` 구현 방식(생성자와 public 키워드를 사용)을 인터페이스 구현에 응용한 것입니다.

```tsx
interface IPerson4 {
  name: string;
  age: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age: number) {}
}
```

# 추상 클래스

`abstract` 키워드를 class 키워드 앞에 붙여서 만듭니다. 추상 클래스는 자신의 속성이나 메서드 앞에 `abstract` 를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 합니다.

```tsx
abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age: number) {}
}
```

다음 `AbstractPerson5`는 name 속성 앞에 abstract가 붙었으므로 new연산자를 적용해 객체를 만들 수 없습니다.

# 클래스의 상속

객체지향 언어는 부모 클래스를 상속받는 상속 클래스를 만들 수 있는데, 타입스크립트는 다음처럼 extends키워드를 사용해 상속 클래스를 만듭니다.

```tsx
class '상속 클래스' extends '부모 클래스` {...}
```

Person5 클래스는 AbstractPerson5 추상 클래스를 상속해 AbstractPerson5가 구현한 age를 얻고, 상속받은 클래스가 구현해야 할 name속성을 구현합니다. 부모 클래스의 생성자를 `super` 키워드로 호출할 수 있습니다.

```tsx
abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age: number) {}
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age: number) {
    super(age);
  }
}
```

# static 속성

타입스크립트 클래스는 정적인 속성을 가질 수 있습니다. 클래스의 정적 속성은 다음과 같은 형태로 선언합니다.

```tsx
class '클래스 이름' {
	static '정적 속성 이름': '속성 타입'
}
```

형태의 점 표기법을 사용해 값을 얻거나 설정 합니다.

```tsx
class A {
  static initValue = 1;
}

let initVal = A.initValue; // 1
```
