/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Readonly<Type>
 * Создает тип со всеми своими свойствами Type, доступными readonly,
 * что означает, что свойства созданного типа не могут быть переназначены.
 */

interface ITodo {
  title: string;
}

const todo: Readonly<ITodo> = {
  title: "Delete inactive users",
};

//todo.title = "hello";//Не могу назначить «заголовок», потому что это свойство только для чтения.
