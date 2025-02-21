/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### NonNullable<Type>
 * Конструирует тип, исключая null и undefined из Type
 */

type TN0 = NonNullable<string | number | undefined>;

const tn0: TN0 = 1;

type TN1 = NonNullable<string[] | null | undefined>;

const tn1: TN1 = [];
