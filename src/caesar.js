// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    
    for(let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      if (char.match(/[a-z]/i)) {
        let isUpperCase = char.toUpperCase() === char;
        char = char.toLowerCase();
        let code = char.charCodeAt(0);
        if(encode) {
          code += shift;
        } else {
          code -= shift;
        }
        if (code < 97) {
          code += 26;
        } else if (code > 122) {
          code -= 26;
        }
        char = String.fromCharCode(code);
      if (isUpperCase) {
        char = char.toUpperCase();
      }
    }
    output += char;
  }

  return output;
}
  
      

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
