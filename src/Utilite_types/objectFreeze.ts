// Эта утилита полезна для представления выражений присваивания,
// которые завершатся ошибкой во время выполнения (т.е. при попытке
//    переназначить свойства замороженного объекта)
// Статический метод object.freeze () замораживает объект.Замораживание объекта
// предотвращает расширения и делает существующие свойства незабываемыми и
// неконфигурируемый.Замороженный объект больше не может быть изменен:
// новые свойства не могут быть добавлены, существующие свойства не могут быть удалены,
// их перечисление, конфигурируемость, запись или значение не могут быть
// Изменено, и прототип объекта не может быть пересмотрен.заморозить ()
// возвращает тот же объект, который был передан.
//Замораживание объекта - это самый высокий уровень целостности, который предоставляет JavaScript.

const objf = {
  prop: 48,
};

Object.freeze(obj);

objf.prop = 49; // Бросает ошибку в строгом режиме

console.log(objf.prop);
// Ожидаемый выход: 48
