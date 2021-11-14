const { argv } = process;

inputFile = () => {
  return argv[argv.indexOf('-i') + 1];
};

outputFile = () => {
  return argv[argv.indexOf('-o') + 1];
};

isDuplicate = () => {
  return (
    [
      argv.filter((item) => item == '-c').length,
      argv.filter((item) => item == '-i').length,
      argv.filter((item) => item == '-o').length,
    ].filter((item) => item > 1).length > 0
  );
};

module.exports = { inputFile, outputFile, isDuplicate };
