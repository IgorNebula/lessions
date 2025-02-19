/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Extending Interfaces
 *В TypeScript вы можете
 *расширить интерфейс, создав новый интерфейс, который наследует
 *Из исходного интерфейса с помощью ключевого слова «Extends».
 *Новый интерфейс может включать в себя дополнительные свойства, методы,
 *или переопределить членов исходного интерфейса.
 */
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  sideLength: 0,
  width: 0,
  height: 0,
};
// В этом примере квадратный интерфейс расширяет форму
// интерфейс и добавляет дополнительную сторону свойства.
// переменная квадрата типа должна иметь все свойства
// как в форме, так и в квадратных интерфейсах.

/**
 * ### Interface Declaration
 *Интерфейс в TypeScript - это план для создания объектов
 *с конкретной структурой.Интерфейс определяет набор свойств,
 *Методы и события, которые должны реализовать класс или объект.
 *Интерфейс - это контракт между объектами и классами и
 *Может использоваться для обеспечения соблюдения конкретной структуры для объектов в вашем коде.
 *Вот пример объявления интерфейса в TypeScript:
 */
interface Person {
  firstName: string;
  lastName: string;
  age: number;

  getFullName(): string;
}

// В этом примере интерфейс человека определяет четыре свойства:
// FirstName, Lastname, Age и метод getFullName ().
// Возрастное свойство необязательно, обозначенное?символ.
// Любой класс или объект, который реализует интерфейс человека, должен
// иметь эти свойства и метод.

/**
 * Hybrid Types
 * 
 */
type StringOrNumber = string | number;
//You can also use hybrid types to create more complex types
//  that can represent a combination of several different types 
// of values. For example:
type Education ={
  degree:string;
  school:string;
  yesar:number;
}

type Usergibrid ={
  name:string;
  age:number;
  email:string;
  education:Education;
};
