/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * В TypeScript ключевое слово AS используется для утверждений типа, что позволяет вам явно информировать
 * Компилятор о типе значения, когда его нельзя вывести автоматически.
 * Утверждения типа-это способ переопределить поведение статического проверки статического типа по умолчанию и
 * Скажите компилятору, что вы знаете больше о типе определенного выражения, чем оно.
 *Вот простой пример:
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const someValue: any = "Hello, wolrd!";
const strLength: number = (someValue as string).length;
console.log(strLength);

// В этом примере Somevalue изначально имеет тип любого, и мы используем оператор AS, чтобы утверждать, что он имеет строку типа перед получением доступа к свойству длины.
// Важно отметить, что утверждения типа не изменяют тип времени выполнения значения и не вызывают какого -либо типа преобразования.Они-время компиляции
// Конструкция, используемая для проверки статического типа в TypeScript.

// Любой является специальным типом TypeScript, который представляет значение любого типа.
// Когда значение объявлено с помощью любого типа, компилятор не будет выполнять какой -либо тип
// проверяет или тип вывод на это значение.For example:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let anyVal: any = 42;

anyVal = "Hello, world!";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
anyVal = true;

// как const является утверждением типа в TypeScript, которое позволяет утверждать, что выражение имеет определенный тип, и что его значение следует рассматривать как значение только для чтения.
// Например:

let colors = ["red", "green", "blue"] as const;

type ColorType = typeof colors;

// Не нулевой оператор утверждения (!)-это утверждение типа в TypeScript, которое позволяет вам
// Скажите компилятору, что значение никогда не будет нулевым или неопределенным.

let nameStr: string | null = null;
let nameLen = nameStr!.length;

// Разработчики TypeScript часто сталкиваются с дилеммой: мы хотим
// чтобы гарантировать, что какое -то выражение соответствует какому -либо типу, но также хочет
// сохранить наиболее специфический тип этого выражения для целей вывода.
// Например:

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

const greenNormalized = palette.green.toUpperCase();
const redNormalized = palette.red[0];
