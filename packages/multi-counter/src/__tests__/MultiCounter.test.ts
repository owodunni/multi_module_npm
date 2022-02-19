import {MultiCounter} from ".."

describe('MultiCounter', () => {
  it("counter", () => {
    const counter = new MultiCounter(10);
    expect(counter.counter()).toEqual(11);
  });
});
