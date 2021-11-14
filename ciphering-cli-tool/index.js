const { argv } = process;
const fs = require('fs');
const { stdin, stdout, stderr } = process;
const { Transform, pipeline } = require('stream');
const { inputFile, outputFile } = require('./shared/utils');
const encrypt = require('./shared/encrypt');

if (argv.indexOf('-i') === -1) {
  stdout.write('Enter text:\n');
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const text = chunk.toString().trim();
      const textOutputStream = encrypt(text);
      const writeStream = fs.createWriteStream(outputFile(), { flags: 'a' });
      writeStream.write(textOutputStream + '\n');
      cb();
    },
  });
  pipeline(stdin, transform, (err) => {
    if (err) {
      stderr.write(`Error: ${err.message}`);
    }
  });
} else if (argv.indexOf('-o') === -1) {
  const readStream = fs.createReadStream(inputFile(), 'utf-8');
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const text = chunk.toString().trim();
      const textOutputStream = encrypt(text);
      stdout.write(textOutputStream);
      cb();
    },
  });
  pipeline(readStream, transform, (err) => {
    if (err) {
      stderr.write(`Error: ${err.message}`);
    }
  });
} else {
  const readStream = fs.createReadStream(inputFile(), 'utf-8');
  const writeStream = fs.createWriteStream(outputFile(), { encoding: 'utf8', flags: 'a' });
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const text = chunk.toString();
      const textOutputStream = encrypt(text);
      writeStream.write(textOutputStream);
      cb();
    },
  });
  pipeline(readStream, transform, (err) => {
    if (err) {
      stderr.write(`Error: ${err.message}`);
    }
  });
}
