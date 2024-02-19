import { add, getDay } from "./objs";
import { addOverLoad } from "./owerLoadedFunc";
import { Counter } from "./owerloadClass";
import { getTotal } from "./restParam";
//project
add().then((s) => console.log(s));

console.log(getDay(2020, 4));

console.log(getTotal(2, 34, 54, 67));

console.log(addOverLoad("e", "r"));

const counter = new Counter();
console.log(counter.count(6));
