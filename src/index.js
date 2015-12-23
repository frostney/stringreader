class StringReader {
  constructor(input) {
    this.input = input;
    this.buffer = '';
    this.reset();
  }

  reset() {
    this.currentIndex = 0;
    this.clearBuffer();
  }

  clearBuffer() {
    this.buffer = '';
  }

  readUntil(character, omitCharacter, notFoundFn) {
    var c, counter, i, len, skip;
    if (omitCharacter == null) {
      omitCharacter = false;
    }
    while (true) {
      if (this.end()) {
        if (notFoundFn) {
          notFoundFn(this.buffer);
        }
        break;
      }
      if (character.length === 1) {
        if (this.input[this.currentIndex] === character) {
          break;
        }
      } else {
        skip = true;
        counter = 0;
        for (i = 0, len = character.length; i < len; i++) {
          c = character[i];
          if (!(this.input[this.currentIndex + counter] !== c)) {
            continue;
          }
          skip = false;
          break;
        }
        counter++;
        if (skip) {
          break;
        }
      }
      this.buffer += this.input[this.currentIndex];
      this.currentIndex++;
    }
    if (omitCharacter) {
      this.currentIndex += character.length;
    }
    return this.buffer;
  }

  readLine(notFoundFn) {
    return readUntil('\n', true, notFoundFn);
  }

  end() {
    return this.currentIndex >= this.input.length;
  }
}

export default StringReader;
