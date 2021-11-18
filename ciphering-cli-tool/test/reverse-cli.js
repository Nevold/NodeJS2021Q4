const inputIndex = process.argv.findIndex((val) => val === '--input');
const input = process.argv[inputIndex + 1];

const reversedInput = input.split('').reverse().join('');

console.log(reversedInput);
