const math = require('./math.js');
const fs = require('fs');

fs.writeFileSync(
  'test.txt',
  'Hello ye synchoronous method se likha hua h fs object ke '
);

fs.writeFile(
  'test2.txt',
  'Hello ye asynchronous method se likha hua h fs object k',
  (err) => {
    return err;
  }
);

console.log('Hello');
console.log(math);
console.log(math.sum(5, 5));
console.log(math.sub(5, 5));
console.log(math.mul(5, 5));
