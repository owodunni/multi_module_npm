export class MultiCounter {
  private count: number;
  constructor(count: number) {
    this.count = count;
  }

  counter(): number {
    this.count++;
    return this.count;
  }
}
