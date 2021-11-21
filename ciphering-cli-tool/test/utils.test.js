const { argv } = process;
const { inputFile, outputFile, isDuplicate, duplicateError } = require('../shared/utils');

describe('Function', () => {
  beforeEach(() => {
    argv.push(...['-c', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']);
  });
  afterEach(() => {
    argv.splice(2);
  });
  test('should be find input path', () => {
    expect(inputFile()).toBeDefined();
    expect(inputFile()).toMatch(/input/);
  });
  test('should be find output path', () => {
    expect(outputFile()).toBeDefined();
    expect(outputFile()).toMatch(/output/);
  });
  test('should be true', () => {
    expect(isDuplicate()).toBeTruthy();
  });
});

describe('Error ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'C1']);
  });
  afterEach(() => {
    argv.splice(2);
  });

  test('should be null', () => {
    duplicateError();
    expect(duplicateError()).toBeNull();
  });
});

describe('Error ', () => {
  beforeEach(() => {
    argv.push(...['-c', 'C1', '-c', 'C1']);
  });
  afterEach(() => {
    argv.splice(2);
  });

  test('should be error', () => {
    const mock = jest.spyOn(process, 'exit').mockImplementation();
    duplicateError();
    expect(mock).toHaveBeenCalledWith(1);
  });
});
