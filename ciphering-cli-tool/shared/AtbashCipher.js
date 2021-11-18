const fixedKey = 'zyxwvutsrqponmlkjihgfedcba';

function isUpperCase(letter) {
  const charCode = letter.charCodeAt(0);
  return !!(charCode >= 65 && charCode <= 90);
}

function isLowerCase(letter) {
  const charCode = letter.charCodeAt(0);
  return !!(charCode >= 97 && charCode <= 122);
}
function reversedNumber(index) {
  const reversedIndex = index < 0 && index >= -27 ? index * -1 : index;
  let tempIndex = reversedIndex - 25;
  if (tempIndex < 0) {
    tempIndex *= -1;
  }
  return tempIndex;
}

function encryptAtbash(text) {
  let encrypted = '';
  for (let i = 0; i < text.length; i++) {
    let index = 0;

    if (isUpperCase(text[i])) {
      const lower = text[i].toLowerCase();
      index = fixedKey.indexOf(lower);
      const reversedChar = fixedKey[reversedNumber(index)];
      encrypted += reversedChar.toUpperCase();
    } else if (isLowerCase(text[i])) {
      const lower = text[i].toLowerCase();
      index = fixedKey.indexOf(lower);
      const reversedChar = fixedKey[reversedNumber(index)];
      encrypted += reversedChar;
    } else {
      encrypted += text[i];
    }
  }

  return encrypted;
}

module.exports = { encryptAtbash, isLowerCase, isUpperCase };
