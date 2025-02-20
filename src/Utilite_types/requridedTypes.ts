/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Required<Type>
 * Конструирует тип, состоящий из всех свойств Типа, для которых задано занчение
 * required. Противоположность - Partial
 */

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
//ok
const obj3: Required<Props> = { a: 5, b: "hello" };
//error
//const obj2: Required<Props> = { a: 5 }; //Свойство 'B' отсутствует в типе '{ a: number; }' но требуется в типе 'Required<Props>'.
