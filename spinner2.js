// Setting initial timer start
let count = 100;
// Array of output elements
const array = ['|', '/', '-', '\\', '|'];
// Need two loops to iterate for both array 
// elements and count iteration
for (let item of array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${item}   `);
    }, count );
  }
  count += 200;
}