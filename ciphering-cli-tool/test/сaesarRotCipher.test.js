const { encryptCaesarRot, mod } = require('../shared/CaesarRotCipher');

describe('Remainder of the division ', () => {
  test('should be equal for positive number ', () => {
    expect(mod(3, 2)).toBe(1);
    expect(mod(7, 3)).toBe(1);
  });
  test('should be equal for negative number ', () => {
    expect(mod(-5, 3)).toBe(1);
    expect(mod(-13, 2)).toBe(1);
  });
});

describe('In cipher Caesar', () => {
  test('should be encrypt the letter', () => {
    expect(encryptCaesarRot('abc', 1)).toMatch(/bcd/);
    expect(encryptCaesarRot('ABC', 1)).toMatch(/BCD/);
  });
  test('should be not encrypt the letter', () => {
    expect(encryptCaesarRot('!_', 1)).toMatch(/!_/);
    expect(encryptCaesarRot('123', 1)).toMatch(/123/);
    expect(encryptCaesarRot('игв', 1)).toMatch(/игв/);
  });
});

describe('In cipher Rot-8', () => {
  test('should be encrypt the letter', () => {
    expect(encryptCaesarRot('abcd', 8)).toMatch(/ijkl/);
    expect(encryptCaesarRot('ABCD', 8)).toMatch(/IJKL/);
  });
  test('should be not encrypt the letter', () => {
    expect(encryptCaesarRot('!', 8)).toMatch(/!/);
    expect(encryptCaesarRot('1', 8)).toMatch(/1/);
    expect(encryptCaesarRot('и', 8)).toMatch(/и/);
  });
});
