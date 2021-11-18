const { encryptAtbash, isLowerCase, isUpperCase } = require('../shared/AtbashCipher');

describe('Letter', () => {
  //   beforeEach(() => {});
  //   afterEach(() => {});
  //   beforeAll(() => {});
  //   afterAll(() => {});
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

describe('In cipher', () => {
  test('should be encrypt the letter', () => {
    expect(encryptAtbash('a')).toMatch(/z/);
    expect(encryptAtbash('z')).toMatch(/a/);
  });
  test('should be not encrypt the letter', () => {
    expect(encryptAtbash('!')).toMatch(/!/);
    expect(encryptAtbash('1')).toMatch(/1/);
    expect(encryptAtbash('и')).toMatch(/и/);
  });
});
