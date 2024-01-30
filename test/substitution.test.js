// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() module", () => {
  it("should correctly subsitute the given message with the given alphabet", () => {
    const actual = substitution(
      "fenrir is my puppy",
      "qwertyuiopasdfghjklzxcvbnm"
    );
    const expected = "ytfkok ol dn hxhhn";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const actual = substitution(
      "fenrir is a shiba",
      "qwertyuiopasdfghjklzxcvbnm"
    );
    const expected = "ytfkok ol q liowq";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("Fenrir", "qwertyuiopasdfghjklzxcvbnm");
    const expected = "ytfkok";
    expect(actual).to.equal(expected);
  });

  it("should return false if the given alphabet isnt exactly 26 characters", () => {
    const actual = substitution("fenrir", "abc");
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the given alphabet has duplicate characters", () => {
    const actual = substitution("fenrir", "aacdefghijklmnopqrstuvwxyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
