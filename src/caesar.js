// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    //create array out of input
    let inputArray = input.toLowerCase().split("");
    if (!encode) {
      shift = shift * -1;
    }
    // check if shift value is valid
    if (
      shift > 25 ||
      shift < -25 ||
      shift == 0 ||
      !shift ||
      shift == undefined ||
      shift == null
    ) {
      return false;
    } else {
      //initialize encrypted string
      let encryption = "";
      // loop through input array
      for (var i = 0; i < inputArray.length; i++) {
        //initialize 'tracking' variables
        let match = false;
        let matchedIndex;
        // loop through alphabet for a matched character
        for (var j = 0; j < alphabet.length; j++) {
          if (inputArray[i] == alphabet[j]) {
            match = true;
            matchedIndex = j;
          }
        }
        // shift if there was a match
        if (match) {
          let indexShift = matchedIndex + shift;
          // ensure index is in scope
          if (indexShift < 0) {
            let wrappedIndex = 26 + indexShift;
            encryption += alphabet[wrappedIndex];
          } else if (indexShift < 26) {
            encryption += alphabet[indexShift];
          } else {
            let wrappedIndex = indexShift - 26;
            encryption += alphabet[wrappedIndex];
          }
        } else {
          encryption += inputArray[i];
        }
      }
      return encryption;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
