'use strict';

class Storage {
    constructor(item) {
        this.item = [];
    }

    getItems() {
        return this.item;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItem(itemToRemove) {
        return this.items.filter(item => item !== itemToRemove);
    }

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems());

storage.removeItem("Scaner");
console.log(storage.getItems());