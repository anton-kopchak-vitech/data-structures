export default class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        console.log(`Top element is ${this.items[0]}`)
        return this.items[0];
    }

    getSize() {
        this.items.length;
    }

    isEmpty() {
        console.log(this.getSize() === 0 ? 'Queue is empty' : 'Queue is NOT empty')
        return this.getSize() === 0;
    }

}