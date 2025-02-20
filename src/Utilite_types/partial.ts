/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Создает тип со своими свойствами , для которых задано необязательное значение.
 * Эта утилита вернет тип, представлящий все подмножества данного типа.
 */
interface Todo {
  title: string;
  description: string;
}
/**
 * Функция принимает два аргумента:
 * @param todo Todo
 * @param fieldsToUpdate  - частичный объект типа Partial<Todo>, который содержит обновленные данные для полей объекта типа todo
 * @returns
 *
 */
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
/**
 * ### todo1
 *  - первоначальный объект типа Тодо, котрый мы будем обновлять.
 */
const todo1 = {
  title: "Организовать стол",
  description: "чистый беспорядок",
};
/**
 *  ### todo2
 * Мы вызываем функцию updateTodo,передавая туда todo1 и объект с обновленным
 * полем description. Поскольку в fieldsToUpdate передано только одно поле description,
 * оно заменит соответствующее поле todo1, оставив остальные поля неизменными.
 *
 * Такой подход удобен для постепенного обновления частей сложного объекта, сохраняя остальную структуру неизменной
 */
const todo2 = updateTodo(todo1, {
  description: "Выбросить мусор",
});

function setTodo(text: string, fields: Partial<Todo>) {
  return { text, ...fields };
}
const setTd = setTodo("hello", { title: "Title", description: "description" });
