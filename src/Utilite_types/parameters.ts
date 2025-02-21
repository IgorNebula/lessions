/**
 * ### Parameters<Type>
 * Конструирует тип кортежа из типов, используемых в параметрах типа функций Type
 */

declare function f1(arg: { a: number; b: string }): void;

type TP0 = Parameters<() => string>;

type TP1 = Parameters<(s: string) => void>;

type TP2 = Parameters<<T>(arg: T) => T>;

type TP3 = Parameters<typeof f1>;

type TP4 = Parameters<any>;

type TP5 = Parameters<never>;

type TP6 = Parameters<string>;

type TP7 = Parameters<Function>;
