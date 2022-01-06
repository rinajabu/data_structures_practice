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

// PUSH SECTION //
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

// POP SECTION //
// must traverse list find the second to last item and assign it's next to null, thus making it the new tail and then removing the old tail
// example of traversing the linked list and popping last item off //
let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("HOLA")
// console.log(list);
console.log(list.pop());
// console.log(list);
console.log(list.pop());
// console.log(list);
console.log(list.pop());
console.log(list);
// output
// Node { val: 'ADIOS', next: null } 3
// Node { val: 'HOLA', next: null } 2