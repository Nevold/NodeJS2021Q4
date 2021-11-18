const encrypt = require('../shared/encrypt');
const { argv } = process;

describe('Command C1 ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'C1']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be match', () => {
    expect(encrypt('abcde')).toMatch(/bcdef/);
    expect(encrypt('1A2B_C')).toMatch(/1B2C_D/);
  });
});

describe('Command C0 ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'C0']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be match', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/zabcd1Z2A_B/);
  });
});

describe('Command R0 ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'R0']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be match', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/stuvw1S2T_U/);
  });
});

describe('Command R1 ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'R1']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be match', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/ijklm1I2J_K/);
  });
});

describe('Command A ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'A']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be match', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/zyxwv1Z2Y_X/);
  });
});