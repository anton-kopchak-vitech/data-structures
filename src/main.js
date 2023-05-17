import Stack from "./stack.js";
import Queue from "./queue.js";
import SinglyLinkedList from "./simplyLinkedList.js";
import DoublyLinkedList from "./doublyLinkedList.js";
import Set from "./set.js";
import HashTable from "./hashTable.js";
import Tree from "./tree.js";
import Trie from "./trie.js";
import Graph from "./graph.js";

// Stack
const stack = new Stack();

console.log("-- Stack --");
console.log("IsEmpty:", stack.isEmpty());

stack.push(100);
stack.push(200);

console.log("Peek:", stack.peek());

stack.push(300);

console.log("Print:", stack.print());

stack.pop();
stack.pop();

stack.clear();

console.log("Print:", stack.print());

console.log("Size:", stack.size());
console.log("IsEmpty:", stack.isEmpty());


// Queue
const queue = new Queue();

console.log("-- Queue --");
console.log("IsEmpty:", queue.isEmpty());

queue.enqueue(100);
queue.enqueue(200);

console.log("Peek:", queue.peek());

queue.dequeue();


// Singly Linked List
const singlyLinkedList = new SinglyLinkedList();

console.log("-- Singly Linked List --");
singlyLinkedList.push(100);
singlyLinkedList.push(201);

console.log("Length:", singlyLinkedList.length);


// Doubly Linked List
const doublyLinkedList = new DoublyLinkedList();

console.log("-- Doubly Linked List --");
doublyLinkedList.push("Harry");
doublyLinkedList.push("Ron");
doublyLinkedList.push("Hermione");

doublyLinkedList.remove(2);
console.log("Length:", doublyLinkedList.length);


// Set
const mySet = new Set();

console.log("-- Set --");
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');

console.log("Has 'apple':", mySet.has('apple'));
console.log("Has 'pear':", mySet.has('pear'));

console.log("Size:", mySet.size());

mySet.delete('banana');

console.log("Values:", mySet.values());


// Hash Table
const hashTable = new HashTable(5);

console.log("-- Hash Table --");
hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("cherry", 3);
hashTable.set("date", 4);

console.log("Get 'banana':", hashTable.get("banana"));

hashTable.remove("cherry");
console.log("Keys:", hashTable.keys());

hashTable.set("banana", 5);
console.log("Get 'banana':", hashTable.get("banana"));


// Tree
const tree = new Tree(1, 'AB');

console.log("-- Tree --");
tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG');

console.log("Pre-order Traversal:", [...tree.preOrderTraversal()].map(x => x.value));

console.log("Root Value:", tree.root.value);
console.log("Has Children:", tree.root.hasChildren);

console.log("Is Leaf (12):", tree.find(12).isLeaf);
console.log("Is Leaf (121):", tree.find(121).isLeaf);
console.log("Parent Value (121):", tree.find(121).parent.value);

tree.remove(12);

console.log("Post-order Traversal:", [...tree.postOrderTraversal()].map(x => x.value));

const trie = new Trie();
console.log("-- Trie --");
trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");


console.log("Contains 'picked':", trie.contains("picked"));
console.log("Contains 'pepper':", trie.contains("pepper"));

trie.remove("pepper");

console.log("Find 'pi':", trie.find("pi"));
console.log("Find 'pe':", trie.find("pe"));

const graph = new Graph();
console.log("-- Trie --");
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

console.log('Graph length:', graph.getLength());
graph.printGraph();

graph.removeVertex('C');

console.log('Graph length after removing vertex:', graph.getLength());
graph.printGraph();
