/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Union types
 * @param input  string | number
 * @param input2 string | number
 * @returns
 */
function combine(input: string | number, input2: string | number) {
  if (typeof input === "string" && typeof input2 === "string") {
    return (input + input2).toUpperCase;
  }
  if (typeof input === "number" && typeof input2 === "number") {
    return input + input2;
  }
}
//call fn
combine;

// Тип пересечения создает новый тип, объединив несколько существующих типов.
// Новый тип имеет все функции существующих типов.
// Чтобы объединить типы, вы используете оператор следующим образом:
//type IntersectType = TypeA & TypeB & TypeC ;

//simple
/**
 * #Intersection Types
 */
interface Person {
  name: string;
  age: number;
}
interface Address {
  city: string;
  country: string;
}

type PersonWithAddress = Person & Address;

const person: PersonWithAddress = {
  name: "john",
  age: 30,
  city: "Moscow",
  country: "Russinan",
};
//symple
person.age;
/**
 * ### Type Aliases
 * Псевдоним типа в TypeScript позволяет создавать новое имя для типа.
 *Вот пример:
 */
type TName = string;
type TAge = number;
type TUser = { aName: TName; aAge: TAge };

//simle
const user: TUser = { aName: "John", aAge: 48 };
const nameUser: string = user.aName;

/**
 * ### Keyof Operator
 * Ключевой оператор в TypeScript используется для получения объединения
 * Ключи из типа объекта.Вот пример того, как его можно использовать:
 */
interface KUser {
  name: string;
  age: number;
  location: string;
}
// В этом примере пользователи - это тип, который представляет союз ключей от
//  пользовательского интерфейса, который является «Имя» |«Возраст» |"расположение".
// И постоянный именованный ключ с типом пользователей, объявляется с значением «Имя».

type UserKeys = keyof KUser; //'name'|'age'|'location'
const key: UserKeys = "age";
