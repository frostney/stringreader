var StringReader = require('../lib').default;

var reader = new StringReader('Split this text by spaces.');

while (!reader.end()) {
  console.log(reader.readUntil(' ', true));
}
