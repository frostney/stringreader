var StringReader = require('../lib').default;

var reader = new StringReader('Split this text by its spaces.');

console.log(reader.readUntil(' '));
console.log(reader.readUntil(' '));
console.log(reader.readUntil(' '));
console.log(reader.readUntil(' '));
