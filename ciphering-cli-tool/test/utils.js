// const { spawn } = require('child_process');
let { argv } = process;
// const INPUT_TO_REVERSE_CLI = '123457';

// const cp = spawn('node', ['utils.js', '--input', INPUT_TO_REVERSE_CLI]);

// let res = '';

// // cp.stdin.on('data', (chunk) => {
// //   res += chunk.toString();
// //   console.log(res);
// //   stdout.write(chunk);
// // });

// // cp.stdout.on('data', (data) => {
// //   console.log(`stdout: ${data}`);
// // });
// cp.stdout.on('data', (chunk) => {
//   res += chunk.toString();
// });
// console.log(argv);
// cp.stdout.on('end', () => {
//   // This is to remove LF
//   res = res.trim();

//   const EXPECTED_OUTPUT = INPUT_TO_REVERSE_CLI.split('').reverse().join('');

//   console.log(`Expect result of processing "${INPUT_TO_REVERSE_CLI}" to be "${EXPECTED_OUTPUT}"`);

//   console.log(`Test result is ${res === EXPECTED_OUTPUT}`);
//   console.log(res);
// });

argv.push(...['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']);
console.log(argv);
argv.splice(2);
console.log('argv', argv);
