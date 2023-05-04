const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should decode a message by translating number pairs to letters", () => {
        const input = "23513434112251";
        const encode = false;

        const actual = polybius(input, encode);
        const expected = "message";

        expect(polybius("23513434112251", false)).to.equal("message");
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const input = "i j";
        const expected = "42 42";
      
        expect(polybius(input, true)).to.equal(expected);
      });
});