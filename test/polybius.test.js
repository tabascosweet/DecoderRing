// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() module", () => {
  it("should correctly encode messages", () => {
    const actual = polybius("bruhmoment", true);
    const expected = "21245432234323513344";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const actual = polybius("a space", true);
    const expected = "11 3453113151";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = polybius("Macy", true);
    const expected = "23113145";
    expect(actual).to.equal(expected);
  });

  it("should translate both i and j to 42 when encoding", () => {
    const actual = polybius("ij", true);
    const expected = "4242";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to i,j when decoding", () => {
    const actual = polybius("4242", false);
    const expected = "i,ji,j";
    expect(actual).to.equal(expected);
  });
});
