/* eslint-disable @typescript-eslint/no-unused-vars */
//Mapped Types
// Картованные типы в TypeScript - это способ создать новый тип,
// основанный на существующем типе, где каждое свойство существующего
//  типа каким -то образом преобразуется.Картовые типы объявляются с
//  использованием комбинации оператора ключа и типа, который отображает
// каждое свойство существующего типа с новым типом свойства.
// Например, следующее приведено на карту тип, который принимает тип
// объекта и создает новый тип со всеми свойствами исходного типа, но с
// измененным их типом на Readonly:

type ReadonlyR<T> = {
  readonly [P in keyof T]: T[P];
};

const objR = { x: 10, y: 20 };
const readOnlyObj: ReadonlyR<typeof objR> = objR;
//В этом примере тип карты Readonly принимает тип объекта T и
// Создает новый тип со всеми свойствами t, но с их изменением типа
// readonly.Оператор ключа t используется для извлечения имен
// свойства t, а синтаксис t [p] используется для доступа к типу
// каждое свойство T. Ключевое слово Readonly используется для изготовления свойств
// нового типа Readonly.
