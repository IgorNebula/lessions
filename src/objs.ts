// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const add = async function (
  s?: string,
  def: string = "default string"
): Promise<string> {
  return typeof s === "undefined" ? def : s;
};

export function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
      else day = 28;
      break;
    default:
      throw Error("invalid month");
  }
  return day;
}
