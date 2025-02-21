/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### InstanceType<Type>
 * Конструирует тип, состоящий из типа экземпляра функции-конструктора в Type.
 */

class Cinst {
  x = 0;
  y = 0;
}
type TI0 = InstanceType<typeof Cinst>;

type TI1 = InstanceType<any>;
type TI2 = InstanceType<never>;
type TI3 = InstanceType<string>; //Type 'String' не удовлетворяет ограничению Abstract New (... args: any) => any '.
type TI4 = InstanceType<Function>; //Тип 'функция' не удовлетворяет ограничению 'Abstract New (... args: any) => any'.
//Тип «Функция» не обеспечивает совпадения для подписи «Новый (... args: any): любой».
