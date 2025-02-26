/* eslint-disable @typescript-eslint/no-unused-vars */

import { doSmothing } from "./externalModules";
import * as MyModule from "my-Module";
/* eslint-disable @typescript-eslint/no-namespace */
namespace MyModuleEX {
  export class MyModele {
    public newFunction() {
      console.log("new function  in MyModule");
    }
  }
}

const objMyModule = new MyModuleEX.MyModele();
objMyModule.newFunction();
// В этом примере мы используем увеличение пространства имен,
//  чтобы добавить новая функция «новая функция» в пространство
// имен «MyModule».
// это делается в файле объявления mymodule.d.ts by
// объявление нового интерфейса «MyModule» в «MyModule»
// пространство имен и добавление к нему функцию «новая функция».

doSmothing();
//In this example, we use the “export” keyword in the “myModule.ts”
//  file to export the “doSomething” function, making it available
// for other files to use.

MyModule.doSome();
// В этом примере мы объявляем модуль окружающей среды «My-Module»
// в файле mymodule.d.ts.Это объявление предоставляет тип
// Информация для модуля «My-Module», включая «DOSOME»
// функция, которая экспортируется из модуля.

MyNamespace.doSome();
// В этом примере мы используем ключевое слово пространства имен в «mynamespace.ts»
// Файл для определения пространства имен «myNamespace».В пространстве имен,
// мы экспортируем функцию «DOSOMETHE».
