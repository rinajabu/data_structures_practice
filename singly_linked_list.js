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

    // method to remove a node from the end of the list
    pop() {
        // if list is empty return undefined
        if (!this.head) return undefined;
        // set the current and newTail equal to each other
        let current = this.head;
        let newTail = current;
        // while the current has a next, traverse the list until you reach the end
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // when you reach the end assign the second to last item as the new tail and set its next property to null, then decrease length by 1 (severs the link to the last item in list)
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // if popping the last item in the list, set head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // method to remove a node from the beginning of the list
    shift() {
        // if list is empty return undefined
        if (!this.head) return undefined;
        // store the original head in a variable
        let currentHead = this.head;
        // set the head to be currentHead's next
        this.head = currentHead.next;
        // decrement the length by 1
        this.length--;
        // if list length becomes 0 after removing, set the tail to null
        if (this.length === 0) {
            this.tail = null;
        }
        // return the removed head
        return currentHead;
    }

    // method to add a new node to the beginning of the list
    unshift(val) {
        // create a new node with the given value
        const newNode = new Node(val);
        // if the list is empty, set the head and tail to the newNode added
        // must use if/else here, so that the newNode.next won't always point back to itself if you unshift an empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set the newNode's next property to the current head
            newNode.next = this.head;
            // set the head to the newNode
            this.head = newNode;
        }
        // increment the length by 1
        this.length++;
        // return the list
        return this;
    }

    // method to get a specific node at a certain index from the list (zero index = starts at 0)
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // method to change the value of a specific node at a given index
    set(index, val) {
        return null;
    }

    // traverse the linked list
    traverse() {
        // start at the head
        let current = this.head;
        // while there's a current, keep reassigning the current to the next node to traverse all the way to the tail
        while(current) {
            console.log(current.val);
            current = current.next;
        }
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

// PUSH SECTION (add to end) //
// push example //
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

// POP SECTION (remove from end) //
// must traverse list find the second to last item and assign it's next to null, thus making it the new tail and then removing the old tail
// example of traversing the linked list and popping last item off //
// let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("HOLA")
// // console.log(list);
// console.log(list.pop());
// // console.log(list);
// console.log(list.pop());
// // console.log(list);
// console.log(list.pop());
// console.log(list);
// output
// Node { val: 'ADIOS', next: null } 3
// Node { val: 'HOLA', next: null } 2

// SHIFT SECTION (remove from beginning) //
// let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("HOLA")
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// // this last shift, the head and tail will be set to null
// console.log(list.shift());
// console.log(list);

// UNSHIFT SECTION (add to beginning) //
// let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("HOLA")
// console.log(list.unshift("16"));

// GET SECTION (get a specific node at a given position) //
// let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("HOLA")
// list.push("WAVE")
// list.push("PEACE")
// console.log(list.get(2));

// SET SECTION (change the value of a node at a specific index) //