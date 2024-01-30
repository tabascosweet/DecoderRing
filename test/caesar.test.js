// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() module", () => {
  it("should return false if the shift value is equal to 0", () => {
    const actual = caesar("zeroshift", 0, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value isnt present", () => {
    const actual = caesar("absentshift", null, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is less than -25", () => {
    const actual = caesar("negativeshift", -26, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is more than 25", () => {
    const actual = caesar("positiveshift", 26, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const actual = caesar("spaces spaces", 2, true);
    const expected = "urcegu urcegu";
    expect(actual).to.equal(expected);
  });

  it("should maintain symbols", () => {
    const actual = caesar("symbols!", 2, true);
    const expected = "uaodqnu!";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = caesar("CAPS", 1, true);
    const expected = "dbqt";
    expect(actual).to.equal(expected);
  });

  it("should wrap around to the beginning of the alphabet", () => {
    const actual = caesar("xanadu", 3, true);
    const expected = "adqdgx";
    expect(actual).to.equal(expected);
  });
});
