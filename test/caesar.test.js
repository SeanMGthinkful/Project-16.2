const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift amount is 0", () => {
    const input = "hello";
    const shift = 0;
    const encode = true;

    const actual = caesar(input, shift, encode);
    const expected = false;

    expect(actual).to.be.equal(expected);
  });
});