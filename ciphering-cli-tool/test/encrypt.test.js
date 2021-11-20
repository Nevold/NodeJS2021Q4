const encrypt = require('../shared/encrypt');
const { argv, stderr } = process;

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

describe('Misconfiguration ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'A1-D1-C2']);
  });
  afterEach(() => {
    argv.splice(2);
  });

  test('should be write', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/abcde1A2B_C/);
  });
});

describe('Misconfiguration ', () => {
  beforeEach(() => {
    argv.push(...['-C']);
  });
  afterEach(() => {
    argv.splice(2);
  });

  test('should be write', () => {
    expect(encrypt('abcde1A2B_C')).toMatch(/abcde1A2B_C/);
  });
});

describe('Error ', () => {
  afterEach(() => {
    mockSderr.mockRestore();
  });

  const println = (text) => {
    stderr.write(text);
  };
  const mockSderr = jest.spyOn(stderr, 'write').mockImplementation(() => {});
  println('Сonfiguration is not valid!');
  test('should be write', () => {
    expect(mockSderr).toHaveBeenCalledWith('Сonfiguration is not valid!');
  });
});
