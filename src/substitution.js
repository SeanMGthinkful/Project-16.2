const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabetArray = alphabet.toLowerCase().split("");

    const uniqueAlphabet = subAlphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (uniqueAlphabet.length !== alphabet.length) return false;

    const encodedMessage = () => {
      let result = [];
      const encode = (character) => {
        const charIndex = originalAlphabet.indexOf(character);
        const encodedCharacter = subAlphabetArray[charIndex];
        result.push(encodedCharacter);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodedMessage = () => {
      let result = [];
      const decode = (character) => {
        const charIndex = subAlphabetArray.indexOf(character);
        const decodedCharacter = originalAlphabet[charIndex];
        result.push(decodedCharacter);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    return encode ? encodedMessage() : decodedMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
