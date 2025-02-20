/**
 * ### Readonly<Type>
 * Создает тип со всеми своими свойствами Type, доступными readonly,
 * что означает, что свойства созданного типа не могут быть переназначены.
 */

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "hello";
