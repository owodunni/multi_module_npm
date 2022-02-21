import { MultiCounter } from "multi-counter";
import {MultiLogger} from ".."

describe('MultiLogger', () => {
  it("log", () => {
    const logger = new MultiLogger(new MultiCounter(22));
    expect(logger.log()).toEqual("23");
  });
});
