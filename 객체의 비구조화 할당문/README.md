# 구조화

예를 들어 name과 age가 각기 다른 의미로 사용되는 변수 두개가 있습니다.

```tsx
let personName = "park";
let personAge = "24";

let comName = "kim";
let comAge = "25";
```

이런 방식으로 구현하면 작성하기도 번거롭고 기능 확장하기도 어렵습니다. 그래서 인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현합니다. 이를 `구조화` 라고 합니다.

```tsx
export interface IPerson {
  name: string;
  age: number;
}

export interface ICom {
  name: string;
  age: number;
}
```

이처럼 구조화하면 비슷한 유형의 변수를 쉽게 만들 수 있습니다. 코드 `확장` 이 수월해집니다.

# 비구조화

구조화된 데이터는 어떤 시점에서 데이터의 일부만 사용해야 할 때가 있습니다. name과 age변수에 각각 저장해서 사용합니다.

```tsx
let name = park.name;
let age = park.age;
```

이 시점부터는 `park` 을 사용하지 않고 그대신 name과 age변수만 사용합니다 이처럼 구조화된 데이터를 분해하는 것을 `비구조화` 라고 합니다.

# 비구조화 할당

비구조화 할당은 객체와 더불어 배열과 튜플에도 적용할 수 있습니다. 비구조화 할당을 객체에 적용하려면 얻고 싶은 속성을 중괄호로 묶습니다.

```tsx
let { name, age } = park;
```

- name = park.name
- age = park.age

값을 각각 초깃값으로 할당 받는다

# 잔여 연산자

`...` 연산자를 제공합니다. 연산자는 사용되는 위치에 따라 `잔여 연산자(rest operator)` 혹은 `전개 연산자(spread operator)` 라고 부릅니다.

```tsx
let address: any = {
  country: "korea",
  city: "Seoul",
  address1: "Gangnam-gu",
  address2: "Sinsa-dong 123-456",
  address3: "789 street, 2 Floor ABC puilding",
};

const { country, city, ...detail } = address;
console.log(detail);
/**
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC puilding'
 */
```

# 전개 연산자

비구조화 할당문이 아닌 곳에서 사용될 때 이를 전개 연산자 라고 합니다. 의미 그대로 객체의 속서을 모두 ‘전개’해 새로운 객체로 만들어 줍니다. 예를들어 세 개의 객체를 모두 통합 한 새로운 객체를 만들고 싶다면 전개 연산자를 사용합니다.

```tsx
let part1 = { name: "park" };
let part2 = { age: 22 };
let part3 = { city: "Seoul", country: "Kr" };

let merged = { ...part1, ...part2, ...part3 };
console.log(merged);
/**
  {
    name: 'park',
    age: 22,
    city: 'Seoul',
    country: 'Kr'
  }
 */
```
