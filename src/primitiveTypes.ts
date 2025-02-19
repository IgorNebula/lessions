/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Dir } from "fs";

//примитивный тип данных, который представляет собой логическое занчение
let isTrue: boolean = true;
isTrue = false;

//представляет числовые значения. Он включает в себя целые и вещественные числа
let intVal: number;
intVal = 10;
let floatVal: number = 10.5;

let stringVal: string =
  "примитив текстовых данных. Набор символов 16-битного Unicode";
//возвращаемое значение функции, которые не возвращают значение.
//так же если не указано ничего, то возвращается по умолчанию
function funName(): void {
  return;
}

//null используется для указания отсутствия или неинициализированного значения
function doSomething(x: string | null | undefined) {
  if (!(x === null) && !(x === undefined)) {
    // do nothing; or
    console.log("hello," + x.toUpperCase());
    return;
  }
}
//TypeScript имеет специальный тип, который вы можете использовать всякий раз, когда вы не хотите, чтобы конкретное значение вызывало ошибки TypeChecking.
//Когда значение имеет тип любого, вы можете получить доступ к любым его свойствам (которые, в свою очередь, будут типа), назовите его как функция, назначить его (или из) значения любого типа или почти все остальноеэто синтаксически законно:
let obj: any = { x: 0 };
// ни одна из следующих строк кода не будет бросить ошибки компилятора.
// Использование `any` обнаруживает все дальнейшая проверка типов, и это предполагается
// Вы знаете среду лучше, чем TypeScript.obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Unknown-это безопасный аналог любого.Все можно было бы назначить неизвестно,
// но неизвестно не присваивается чему -либо, кроме себя и ни о чем без утверждения типа или
// контрольный поток, основанный на сужении.Аналогичным
// сначала утверждая или сужение до более конкретного типа.

function f1(a: any) {
  a.b();
}
function f2(a: unknown) {
  a.b(); //ошибка: свойство В не существует в типе "unknown"
}

interface Person {
  name: string;
  age: number;
}

// TypeScript позволяет специально ввести объект, используя интерфейс, который можно повторно использовать несколькими объектами.
function greet(person: Person) {
  return "hello" + person.name;
}

// в TypeScript класс - это план для создания объектов с
// конкретные свойства и методы.Занятия являются фундаментальной концепцией в объектно-ориентированном программировании.
// Вот пример простого класса в TypeScript:
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Drivind my ${this.year} ${this.make} ${this.model}`);
  }
}
//

enum Directin {
  Up = 1,
  Down,
  Left,
  Right,
}
const dir = Directin.Up;
// Чтобы указать тип массива, подобного [1, 2, 3], вы можете использовать номер синтаксиса [];
// Этот синтаксис работает для любого типа (например, строка [] является массивом строк и т. Д.).
// Вы также можете увидеть это написано как массив <число>, что означает то же самое.
const nums1: number[] = [1, 2, 3];
const nums2: Array<number> = [1, 2, 3];
//
const nums2D: number[][] = [
  [1, 1, 2, 3],
  [1, 2, 3, 4],
];
//
const nums3D: number[][][] = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
];
// Тип кортежа - это еще один тип массива, который точно знает, сколько элементов
// он содержит, и какие именно типы он содержит в определенных положениях.
type StringNumberPair = [string, number];

const pair: StringNumberPair = ["Hello", 42];

const first = pair[0];
const second = pair[1];

//object -Чтобы определить тип объекта, мы просто перечислим его свойства и его типы.
// Например, вот функция, которая принимает точечный объект:
function printCoord(pt: { x: number; y: number }) {
  console.log(pt.x + pt.y);
}
printCoord({ x: 3, y: 5 });

function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("something failed");
}

function infinitiLoop(): never {
  // eslint-disable-next-line no-constant-condition, no-empty
  while (true) {}
}
