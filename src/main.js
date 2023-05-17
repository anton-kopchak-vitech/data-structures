import Stack from "./stack.js";
import Queue from "./queue.js";
import SinglyLinkedList from "./simplyLinkedList.js";
import DoublyLinkedList from "./doublyLinkedList.js";
import Set from "./set.js";
import HashTable from "./hashTable.js";

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

console.log(stack.print())

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.size()

stack.isEmpty()



const queue = new Queue();

queue.isEmpty()

queue.enqueue(100);
queue.enqueue(200);

queue.peek();

queue.dequeue();


const simpleLinkedList = new SinglyLinkedList();

simpleLinkedList.push(100);
simpleLinkedList.push(201);
console.log(simpleLinkedList.length, 'SinglyLinkedList')


const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("Harry")
doublyLinkedList.push("Ron")
doublyLinkedList.push("Hermione")

doublyLinkedList.remove(2);
console.log(doublyLinkedList.length, 'DoublyLinkedList');


const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');

console.log(mySet.has('apple'));
console.log(mySet.has('pear'));

console.log(mySet.size());

mySet.delete('banana');

console.log(mySet.values());

const otherSet = new Set();
otherSet.add('orange');
otherSet.add('pear');
const unionSet = mySet.union(otherSet);
console.log(unionSet.values());

const intersectionSet = mySet.intersection(otherSet);
console.log(intersectionSet.values());

const differenceSet = mySet.difference(otherSet);
console.log(differenceSet.values());

console.log(mySet.isSubsetOf(unionSet));
console.log(otherSet.isSubsetOf(mySet));


const hashTable = new HashTable(5);

hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("cherry", 3);
hashTable.set("date", 4);

console.log(hashTable.get("banana"));

hashTable.remove("cherry");
console.log(hashTable.keys());

hashTable.set("banana", 5);
console.log(hashTable.get("banana"));
