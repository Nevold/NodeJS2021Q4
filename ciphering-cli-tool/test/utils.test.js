const { argv } = process;
const { inputFile, outputFile, isDuplicate } = require('../shared/utils');

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
  test('should be find duplicate command', () => {
    expect(isDuplicate()).toBeDefined();
    expect(isDuplicate()).toBeTruthy();
  });
});
