// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipher = [];

  function validAlphabet(alphabet) {
    const checkNoDuplicates = new Set(alphabet);
    return alphabet && alphabet.length === 26 && checkNoDuplicates.size === 26;
  }

  function initializeCipher(alphabet, encode) {
    const source = encode ? regAlphabet : alphabet;
    const target = encode ? alphabet : regAlphabet;

    for (let i = 0; i < 26; i++) {
      cipher[source[i]] = target[i];
    }
  }

  function substitution(input, alphabet, encode = true) {
    // check for valid alphabet
    if (!validAlphabet(alphabet)) {
      return false;
    }
    //initialize cipher
    initializeCipher(alphabet, encode);

    const result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        return letter === " " ? " " : cipher[letter];
      });

    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
