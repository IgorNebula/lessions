export class Counter {
  private current: number = 0;
  //count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      const values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}
