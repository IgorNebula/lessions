/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Extract<Type,Union>
 * Конструирует тип путем извлечения из Type всех членов объединения,
 * которые могут быть назначены Union
 */

type TE0 = Extract<"a" | "b" | "c", "a" | "f">;

const t0: TE0 = "a";

type TE1 = Extract<string | number | (() => void), VoidFunction>;

const te1: TE1 = (): void => {};

type EShape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type TE2 = Extract<EShape, { kind: "circle" }>;

const te2: TE2 = {
  kind: "circle",
  radius: 0,
};
