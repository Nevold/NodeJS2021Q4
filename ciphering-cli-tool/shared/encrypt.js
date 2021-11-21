const { argv, stderr } = process;
const encryptAtbash = require('./AtbashCipher');
const encryptCaesarRot = require('./CaesarRotCipher');

function encrypt(text) {
  let encryptText = text;
  const encryptComands = argv[argv.indexOf('-c') + 1];
  const configLog = encryptComands.split('-').map((item) => [...item]);
  for (let i = 0; i < configLog.length; i++) {
    switch (true) {
      case (configLog[i][0] === 'A' && configLog[i][1] !== undefined) ||
        configLog[i].length > 2 ||
        configLog[i].length === 0 ||
        configLog[i][1] > 1 ||
        configLog[i][0] !== configLog[i][0].toUpperCase() ||
        !/[CRA]/.test(configLog[i][0]):
        stderr.write('Сonfiguration is not valid!');

        break;
      case configLog[i][0] === 'C' && configLog[i][1] === '1':
        encryptText = encryptCaesarRot(encryptText, 1);
        break;
      case configLog[i][0] === 'C' && configLog[i][1] === '0':
        encryptText = encryptCaesarRot(encryptText, -1);
        break;
      case configLog[i][0] === 'R' && configLog[i][1] === '1':
        encryptText = encryptCaesarRot(encryptText, 8);
        break;
      case configLog[i][0] === 'R' && configLog[i][1] === '0':
        encryptText = encryptCaesarRot(encryptText, -8);
        break;
      case configLog[i][0] === 'A' && configLog[i][1] === undefined:
        encryptText = encryptAtbash(encryptText);
        break;
      default:
        break;
    }
  }
  return encryptText;
}

module.exports = encrypt;
