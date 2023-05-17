export default class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const arrayAtIndex = this.table[index];
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                if (arrayAtIndex[i][0] === key) {
                    return arrayAtIndex[i][1];
                }
            }
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);
        const arrayAtIndex = this.table[index];
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                if (arrayAtIndex[i][0] === key) {
                    arrayAtIndex.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.table.length; i++) {
            const arrayAtIndex = this.table[i];
            if (arrayAtIndex) {
                for (let j = 0; j < arrayAtIndex.length; j++) {
                    keysArray.push(arrayAtIndex[j][0]);
                }
            }
        }
        return keysArray;
    }
}
