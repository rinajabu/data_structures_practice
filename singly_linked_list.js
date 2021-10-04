///////////////////////////////
//////////// SINGLY LINKED LISTS (SLL) //////////
///////////////////////////////

// What is a linked list? //
// A data structure that contains a head, tail, and length property
// Consist of nodes, and each node has a value and a pointer to another node or null

class Node {

    // initializing a new instance of a node 
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList {

    // initializing a singly linked list
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // method to add a new node to the end of the list
    push(val) {
        // create a new node
        const newNode = new Node(val);
        // if list is empty, set the head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head; 
            // otherwise, set the current tails next to the new node being pushed in and set the new tail to be the new node
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment the length by 1
        this.length++;
        // return the list
        return this;
    }

}

// CONSTRUCTOR SECTION //
// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("Rina")
// console.log(first);
// output
// Node {
//   val: 'Hi',
//   next: Node { val: 'there', next: Node { val: 'Rina', next: null } }
// }

// PUSH SECTION //
// let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("HOLA")
// list.push("ADIOS")
// console.log(list);
// output
// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
//   tail: Node { val: 'HOLA', next: null },
//   length: 3
// }