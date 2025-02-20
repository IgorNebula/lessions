/* eslint-disable @typescript-eslint/no-unused-vars */
/** ### Record<Keys, Type>
 *Конструирует тип объекта, ключи от свойств которых являются ключими и свойством которого
 *значения тип.Эта утилита может быть использована для отображения свойств
 *введите на другой тип.*/

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breef: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breef: "Persian" },
  boris: { age: 5, breef: "Maine coon" },
  mordred: { age: 16, breef: "British Shorthair" },
};

cats.boris.age = cats.boris.age + 1;
