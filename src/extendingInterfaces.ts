/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * ### Extending Interfaces
 *В TypeScript вы можете
 *расширить интерфейс, создав новый интерфейс, который наследует
 *Из исходного интерфейса с помощью ключевого слова «Extends».
 *Новый интерфейс может включать в себя дополнительные свойства, методы,
 *или переопределить членов исходного интерфейса.
 */
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  sideLength: 0,
  width: 0,
  height: 0,
};
// В этом примере квадратный интерфейс расширяет форму
// интерфейс и добавляет дополнительную сторону свойства.
// переменная квадрата типа должна иметь все свойства
// как в форме, так и в квадратных интерфейсах.

/**
 * ### Interface Declaration
 *Интерфейс в TypeScript - это план для создания объектов
 *с конкретной структурой.Интерфейс определяет набор свойств,
 *Методы и события, которые должны реализовать класс или объект.
 *Интерфейс - это контракт между объектами и классами и
 *Может использоваться для обеспечения соблюдения конкретной структуры для объектов в вашем коде.
 *Вот пример объявления интерфейса в TypeScript:
 */
interface Person {
  firstName: string;
  lastName: string;
  age: number;

  getFullName(): string;
}

// В этом примере интерфейс человека определяет четыре свойства:
// FirstName, Lastname, Age и метод getFullName ().
// Возрастное свойство необязательно, обозначенное?символ.
// Любой класс или объект, который реализует интерфейс человека, должен
// иметь эти свойства и метод.

/**
 * Hybrid Types
 *
 */
type StringOrNumber = string | number;
// Вы также можете использовать гибридные типы для создания более сложных типов
// это может представлять собой комбинацию нескольких различных типов
// значений.Например:
type Education = {
  degree: string;
  school: string;
  yesar: number;
};

type Usergibrid = {
  name: string;
  age: number;
  email: string;
  education: Education;
};
/**
 * Пример: гибридный тип объект-функция
 * В данном примере интерфейс Logger представляет собой смесь
 * двух типов функций: одни из них принимают сообщения
 *  в качествае аргументов, а другие - нет. Кроме того,
 *  он предоставляет свойство с именем level и метод с
 * именем setLevel
 */
interface Logger {
  (message: string): void; // объект реализующий этот интерфейс,так же должен поддерживать вызов себя как функции.
  level: string;
  setLevel(newLevel: string): void;
}

function createLogger(): Logger {
  let logger = function (message: string) {
    //свойство-функция принимающая в параметры сообщение
    console.log(`[${logger.level}] ${message}`); //вывод в консоль: уровень и сообщение описанных в интерфейсе
  } as Logger; // утверждение типа указывающее компилятору что, эта функция реализация интерфейса "логгер"

  logger.level = "info"; //устанавливаем начальный уровень лога в инфо
  //Метод для изменения текущего уровня логгера
  logger.setLevel = function (newLevel: string) {
    //переменной "логгер" назначаем анонимную функцию с параметром " новый уровень"
    logger.level = newLevel; // в атрибут "левел" переменной "логгер", записываем параметр "новый уровень" из анонимной функции
  };
  return logger; //возвращаем созданную переменную типа "Логгер"
}

//Фабричный метод: создание разных логгеров реализующих один интерфейс с разной реализацией
interface ILogger {
  log(message: string): void;
  setLevel(level: string): void;
}

class FileLogger implements ILogger {
  log = function (message: string) {
    console.log("Logging to console" + message);
  };
  setLevel(newLevel: string): void {
    console.log(`Level log${newLevel} to console`);
  }
}

class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log("Logging to file" + message);
  }
  setLevel(newLevel: string): void {
    console.log(` level log${newLevel} to file`);
  }
}

abstract class LoggerFactory {
  abstract createLogger(): ILogger;
}

class FileLoggerFactory extends LoggerFactory {
  createLogger(): ILogger {
    return new FileLogger();
  }
}

class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): ILogger {
    return new ConsoleLogger();
  }
}

//use factory
const filefactory: LoggerFactory = new FileLoggerFactory();
const consoleFactory: LoggerFactory = new ConsoleLoggerFactory();

const fileLogger = filefactory.createLogger();
const consoleLogger = consoleFactory.createLogger();
fileLogger.setLevel("info");
fileLogger.log("Hello World");
consoleLogger.log("Hello typescript");
consoleLogger.setLevel("warn");

/**
 * Strategy
 * Если нужно динамически менять поведение логгера(например,
 * способ вывода сообщений : в консоль, в файл, в БД), то стратегия
 * может быть полезна. Она позволяет изменять алгоритм реализации во
 * время выполнения программы.
 */
class ConsoleLoggerStrategy implements ILogger {
  log(message: string): void {
    console.log("[Console] ", message);
  }
  setLevel(level: string): void {
    console.log("[Level] ", level);
  }
}

class FileLoggerStrategy implements ILogger {
  log(message: string): void {
    console.log("[File] Writing to file:", message);
  }
  setLevel(level: string): void {
    console.log("[File] Writing to file:", level);
  }
}

class LoggerStrategy {
  private strategy: ILogger;
  constructor(strategy: ILogger) {
    this.strategy = strategy;
  }
  public log(message: string) {
    this.strategy.log(message);
  }

  public setLevel(level: string) {
    this.strategy.setLevel(level);
  }

  public changestrategy(strategy: ILogger) {
    this.strategy = strategy;
  }
}

// use Strategy
const logger = new LoggerStrategy(new ConsoleLoggerStrategy());
logger.setLevel("info");
logger.log("Hello world!");

logger.changestrategy(new FileLoggerStrategy());
logger.setLevel("warn");
logger.log("Changing logging strategy.");

/**
 *  Декоратор:
 * Если нужно расширять функционал логгера без изменения существующего
 * класса, декоратор может бытьо полезен. Он позволяет динамически
 * добавлять новые возможности к существующему объекту.
 */
class BaseLogger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
  setLevel(level: string): void {
    console.log(level);
  }
}

class TimeStampLoggerDecorator implements ILogger {
  constructor(private logger: ILogger) {}
  log(message: string): void {
    const timeStamp = new Date().toISOString();
    this.logger.log(`${timeStamp}:${message}`);
  }
  setLevel(level: string): void {
    const debugLvl = "Debug:";
    this.logger.setLevel(`${debugLvl} ${level}`);
  }
}

class ErrorLoggerDecorator implements ILogger {
  constructor(private logger: ILogger) {}

  log(message: string): void {
    if (message.startsWith("Error:")) {
      this.logger.log(`!!!${message}!!!`);
    } else {
      this.logger.log(message);
    }
  }
  setLevel(level: string): void {
    if (level.startsWith("Error")) {
      this.logger.setLevel(`!!!${level}!!!`);
    }
  }
}
//use decorator
const baseLogger = new BaseLogger();
const decoratedLogger = new TimeStampLoggerDecorator(baseLogger);
decoratedLogger.log("Hello Wolrd!");
decoratedLogger.setLevel("info");

const errorDecoratedLogger = new ErrorLoggerDecorator(decoratedLogger);
errorDecoratedLogger.log("Error: somtehing went wrong");
errorDecoratedLogger.setLevel("Error");

const multyDecoratedLogger = new ErrorLoggerDecorator(
  new TimeStampLoggerDecorator(new BaseLogger())
);

/**
 * Синглтон
 * если нужно гарантировать, что существует только один экземпляр логгера,
 * синглтон может быть полезен. Этот паттерн обеспечивает глобальную точку
 * доступа к единственному экземпляру объекта.
 */

class SingleLogger implements ILogger {
  private static instance: SingleLogger | null = null;
  private constructor() {}
  public log(message: string): void {
    console.log(message);
  }
  public setLevel(level: string): void {
    console.log(level);
  }

  public static getInstance(): SingleLogger {
    if (!SingleLogger.instance) {
      SingleLogger.instance = new SingleLogger();
    }
    return SingleLogger.instance;
  }
}

const loggerSing1 = SingleLogger.getInstance();
const loggerSing2 = SingleLogger.getInstance();

if (loggerSing1 === loggerSing2) {
  console.log("Оба ссылки указывают на один и тот же объект.");
}

const loggerDecoratedSing = new TimeStampLoggerDecorator(loggerSing1);
