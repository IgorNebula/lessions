/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/**
 * ### instanceof
 * Оператор экземпляра - это способ сузить тип переменной.
 * Используется для проверки, является ли объект экземпляром класса.
 */
class Bird {
  fly() {
    console.log("flying...");
  }
  layEggs() {
    console.log("laying eggs...");
  }
}

const pet = new Bird();

if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet is not a bird");
}
//еще пример
function logValue(x: Date | string) {
  if (x instanceof Date) {
    //если х является типом Дата,то x.toUTCString
    console.log(x.toUTCString());
  } else {
    //иначе
    console.log(x.toUpperCase());
  }
}

/**
 * ### typeof Operator
 *Оператор TypeOF используется для проверки типа переменной.
 * Он возвращает строковое значение, представляющее тип переменной.
 */

let value: string | number = "hello";

if (typeof value === "string") {
  console.log(`value is a string ${value}`);
} else {
  console.log(`value is a nember ${value}`);
}

/**
 * ### Equality
 * TypeScript также использует операторы переключения и проверки равенства
 * нравится ===,! ==, == и! = к узким типам.Например:
 */
function examle(x: string | number, y: string | boolean) {
  if (x === y) {
    //Теперь мы можем вызвать любой метод 'string' на «x» или «y»
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

/**
 * ### Truthiness
 *Правда может быть не слово, которое вы найдете в словаре,
 * Но это то, о чем вы услышите в JavaScript.
 *В JavaScript мы можем использовать любое выражение в условиях, && s, || s,
 *Если утверждения, логические отрицания (!) И многое другое.В качестве примера,
 *Если утверждения не ожидают, что их условие всегда будет иметь булевы типа.
 */
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return " Nobody`s here. :(";
}

/**
 * ### Type Predicates
 * Типовые предикаты - это функции, которые возвращают логическое значение.
 * Они используются для сужения типа переменной.
 * Тип предикатов используется в типовых охранниках.
 */
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function exemple(x: unknown) {
  if (isString(x)) {
    //Теперь мы можем вызвать любой метод «строки» на «X».
    x.toUpperCase();
  } else {
    console.log(x);
  }
}
