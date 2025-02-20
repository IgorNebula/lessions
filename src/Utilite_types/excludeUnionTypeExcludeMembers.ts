/* eslint-disable @typescript-eslint/no-unused-vars */
/** ### Exclude<UnionType, ExcludedMembers>
 *Создает тип путем исключения из UnionType всех членов союза, которые
 * могут быть назначены ExcludedMembers.*/

type T0 = Exclude<"a" | "b" | "c", "a">; //в типе осталось | "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;

type ExShape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<ExShape, { kind: "circle" }>;
