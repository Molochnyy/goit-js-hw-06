'use strict';

class StringBuilder {
    constructor(initialValue) {
        this.initialValue = #value;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        return this.#value.push(str);
    }

    padStart(str) {
        let a = this.#value.reverse();
        a.push(str);
        let b = a.reverse();
        return b;
    }

    padBoth(str) {
        this.#value.push(str);
        let c = this.#value.reverse();
        c.push(str);
        let d = a.reverse();
        return d;
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="