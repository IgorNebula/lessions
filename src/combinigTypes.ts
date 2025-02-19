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
person.age;
