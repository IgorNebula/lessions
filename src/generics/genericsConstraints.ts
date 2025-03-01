// Общие ограничения в TypeScript позволяют указать требования
// для параметров типа, используемых в общем типе.Эти ограничения гарантируют
// что параметр типа, используемый в общем типе, соответствует определенным требованиям.
// ограничения указаны с использованием ключевого слова Extends, за которым следует тип
// что параметр типа должен расширять или реализовать.

interface ILenghwise {
  length: number;
}
function loggerIdentity<T extends ILenghwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//loggerIdentity<number>(3);// Ошибка, номер не имеет свойства .length
loggerIdentity({ length: 10, value: 3 }); //ok

// В этом примере продольный интерфейс определяет свойство длины.
// функция LoggingIdentity использует общий параметр типа T, который
// ограниченный продольным интерфейсом, что означает, что параметр типа
// Должен расширить или реализовать продольный интерфейс.Это ограничение
// гарантирует, что свойство длины доступно в аргументе, переданном
// функция loggingIdentity.
