/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Typing Functions
 *В TypeScript функции могут быть напечатаны несколькими различными способами, чтобы указать входные параметры и возвращать тип функции.
 *Объявление функции с типами:
 */

function add(a: number, b: number): number {
  return a + b;
}

//Функция стрелочная с типами:
const multiply = (a: number, b: number): number => {
  return a * b;
};

//Тип функции
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};

/**
 * function Overloading
 * Перегрузка функции в TypeScript позволяет несколько функций с
 *то же имя, но с различными параметрами, которые должны быть определены.Правильный
 *функция для вызова определяется на основе числа, типа и порядка
 *Аргументы переданы функции во время выполнения.
 */
function addOver(a: number, b: number): number;
function addOver(astr: string, b: string): string;
function addOver(a: any, b: any): any {
  return a + b;
}
