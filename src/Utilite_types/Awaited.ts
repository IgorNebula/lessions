/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Awaited<Type>
Этот тип предназначен для моделирования таких операций,
 как await в async функциях или метод .then() в Promises - в частности,
  способ, которым они рекурсивно разворачивают Promises.
 */
const a = "";
type A = Awaited<Promise<string>>;

type B = Awaited<Promise<number>>;
