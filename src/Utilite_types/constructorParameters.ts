/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### ConstructorParameters<Type>
 * Создает кортеж или тип массива из типов типа функции - конструктора.
 * Он создает тип кортежа со всеми типами параметров(или тип never, если Type не является функцией)
 */
type TCP0 = ConstructorParameters<ErrorConstructor>;

type TCP1 = ConstructorParameters<FunctionConstructor>;
type TCP2 = ConstructorParameters<RegExpConstructor>;
class C {
  constructor(a:number,b:string){}

}type TCP3 = ConstructorParameters<typeof C>
type TCP4 = ConstructorParameters<any>
type TCP5 = ConstructorParameters<Function>
//Тип 'функция' не удовлетворяет абстрактному ограничению "
// новый (... args: any) => any '.Тип 'функция' не обеспечивает совпадения
// для подписи «Новый (... args: any): любой».