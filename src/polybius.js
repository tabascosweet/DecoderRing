// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  function letterFromCoords(coords) {
    const row = coords[0];
    const col = coords[1];

    if (row === "4" && col === "2") {
      return ["i", "j"];
    }

    for (const char in polybiusSquare) {
      if (polybiusSquare[char] === coords) {
        return char;
      }
    }
  }

  function encodeMessage(message) {
    const lowercaseMessage = message.toLowerCase();
    let result = "";
    for (let i = 0; i < lowercaseMessage.length; i++) {
      const char = lowercaseMessage[i];
      if (char === " ") {
        result += " ";
      } else {
        result += polybiusSquare[char];
      }
    }
    return result;
  }

  function decodeMessage(message) {
    let result = "";
    let i = 0;
    while (i < message.length) {
      if (message[i] === " ") {
        result += " ";
        i++;
      } else {
        const coords = message.slice(i, i + 2);
        const char = letterFromCoords(coords);
        if (!char) {
          return false;
        }
        result += char;
        i += 2;
      }
    }
    return result;
  }

  function polybius(input, encode = true) {
    if (encode) {
      return encodeMessage(input);
    } else {
      let numberOfChars = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          numberOfChars++;
        }
      }
      if (numberOfChars % 2 !== 0) {
        // if chars not even
        return false;
      }
      return decodeMessage(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
