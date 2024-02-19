export function getTotal(...numbers:number[]){
  let total =0;
  numbers.forEach((num=> total+= num));
  return total;
}