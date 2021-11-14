const { argv } = process;

inputFile = () => {
  return argv[argv.indexOf('-i') + 1];
};

outputFile = () => {
  return argv[argv.indexOf('-o') + 1];
};

module.exports = { inputFile, outputFile };
