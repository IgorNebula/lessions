/* function addOverLoad(a:number|string,b:number|string):number|string|undefined{
  if(typeof a === 'number' && typeof b==="number" ) return a+b;
  if(typeof a === 'string' && typeof b ==='string') return a+b;
  return;
} */

export function addOverLoad(
  a: number | string,
  b: number | string,
  c?: number | string
):number|string|undefined {
  if (c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number")
      return a + b + c;
    if (typeof a === "string" && typeof b === "string" && typeof c === "string")
      return a + b + c;
  } else {
    if (typeof a === "number" && typeof b === "number") return a + b;
    if (typeof a === "string" && typeof b === "string") return a + b;
  }
}
