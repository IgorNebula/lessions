/* eslint-disable @typescript-eslint/no-unused-vars */
/*Конструирует тип, выбирая набор ключей свойств (строка 
буквальный или союз струнных литералов) из типа.*/

interface PTodo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<PTodo, "title" | "completed">;

const pTodo: TodoPreview = {
  title: "Clear room",
  completed: false,
};
