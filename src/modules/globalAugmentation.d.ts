/**
 * ### Global Augmentation
 * В TypeScript глобальное увеличение - это способ добавить объявления в
 * Глобальный объем.Это полезно, когда вы хотите добавить новые функции в
 * Существующие библиотеки или для увеличения встроенных типов в TypeScript.
 */

declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}
global.myGlobalFunction = function () {
  console.log("global function");
};

myGlobalFunction();
// В этом примере мы объявляем новое пространство имен «Nodejs» и добавляем
// интерфейс «глобальный».В «глобальном» интерфейсе,
// Мы объявляем новую функцию «myglobalfunction».
