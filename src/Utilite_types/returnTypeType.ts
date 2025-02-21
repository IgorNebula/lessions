/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### ReturnType<Type>
 * Конструирует тип, состоящий из возвращаемого типа функций Type.
 * Для перегруженных функций это будет тип возвращаемой последней сигнатуры
 */

declare function fRet(): { a: number; b: string };

type TR0 = ReturnType<() => string>;
type TR1 = ReturnType<(s: string) => void>;
type TR2 = ReturnType<<T>() => T>;
type TR3 = ReturnType<<T extends U, U extends number[]>() => T>;
type TR4 = ReturnType<typeof fRet>;
type TR5 = ReturnType<any>;
type TR6 = ReturnType<never>;
type TR7 = ReturnType<string>; //Тип 'String' не удовлетворяет ограничению '(... args: any) => any'.
type TR8 = ReturnType<Function>; //Тип 'функция' не удовлетворяет ограничению '(... args: any) => any'.
// Тип «Функция» не обеспечивает совпадения для подписи »(... args: any): any '.
