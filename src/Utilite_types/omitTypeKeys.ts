/** ### Omit<Type, Keys>
 *Создает тип, выбирая все свойства из типа, а затем удаляя
 *Ключи (струнный буквальный или союз струнных литералов).Противоположность выбора.*/

interface OmitTodo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type OMitTodoPreview = Omit<OmitTodo, "description">;

const omittodo: OMitTodoPreview = {
  title: "Clean room",
  completed: true,
  createdAt: 123773174732,
};

omittodo;

type TodoInfo = Omit<OmitTodo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Забирай детей",
  description: "Детский сад закрывается в 17:00",
};

todoInfo;
