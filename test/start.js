import { expect } from "chai";
import { raiseToPower } from "../index.js";

it("Should raise to the power correctly", function () {
  const num = 10;
  const power = 2;
  expect(raiseToPower(num, power)).to.equal(100);
});
