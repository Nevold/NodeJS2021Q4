const { encryptAtbash, isLowerCase, isUpperCase, reversedNumber } = require('../shared/AtbashCipher');

describe('Letter', () => {
  test('should be uppercase ', () => {
    expect(isUpperCase('A')).toBeTruthy();
    expect(isUpperCase('a')).toBeFalsy();
  });
  test('should be lowercase ', () => {
    expect(isLowerCase('A')).toBeFalsy();
    expect(isLowerCase('a')).toBeTruthy();
  });
  test('should be of the English alphabet ', () => {
    expect(isUpperCase('И')).toBeFalsy();
    expect(isLowerCase('и')).toBeFalsy();
  });
});
describe('Number', () => {
  test('should be expect with positive ', () => {
    expect(reversedNumber(12)).toBe(13);
    expect(reversedNumber(2)).toBe(23);
  });
  test('should be expect with negative ', () => {
    expect(reversedNumber(-2)).toBe(23);
    expect(reversedNumber(-12)).toBe(13);
  });
});

describe('In cipher Atbash', () => {
  test('should be encrypt the letter', () => {
    expect(encryptAtbash('a')).toMatch(/z/);
    expect(encryptAtbash('Z')).toMatch(/A/);
  });
  test('should be not encrypt the letter', () => {
    expect(encryptAtbash('!')).toMatch(/!/);
    expect(encryptAtbash('1')).toMatch(/1/);
    expect(encryptAtbash('и')).toMatch(/и/);
  });
});
