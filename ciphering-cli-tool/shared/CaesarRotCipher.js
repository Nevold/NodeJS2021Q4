function mod(n, p) {
  return n < 0 ? p - (Math.abs(n) % p) : n % p;
}

function encryptCaesarRot(massage, key) {
  let encMassage = '';
  for (let i = 0; i < massage.length; i++) {
    let charCode = massage.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode -= 65;
      charCode = mod(charCode + key, 26);
      charCode += 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode -= 97;
      charCode = mod(charCode + key, 26);
      charCode += 97;
    }
    encMassage += String.fromCharCode(charCode);
  }
  return encMassage;
}

module.exports = { encryptCaesarRot, mod };
