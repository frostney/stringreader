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
    /* eslint-disable no-constant-condition */

    const omitChar = (omitCharacter == null) ? false : omitCharacter;

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
        let skip = true;
        let counter = 0;
        for (let i = 0, len = character.length; i < len; i++) {
          const c = character[i];

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
    if (omitChar) {
      this.currentIndex += character.length;
    }
    return this.buffer;
  }

  readLine(notFoundFn) {
    return this.readUntil('\n', true, notFoundFn);
  }

  end() {
    return this.currentIndex >= this.input.length;
  }
}

export default StringReader;
