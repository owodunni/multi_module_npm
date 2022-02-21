import type { MultiCounter } from "multi-counter";


export class MultiLogger {
  private counter: MultiCounter;
  constructor(counter: MultiCounter) {
    this.counter = counter;
  }

  log(): string {
    const res = this.counter.counter().toString();
    console.log(res);
    return res;
  }
}
