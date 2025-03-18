/* Key operations to implement:
● Node structure: Each node contains data and next.
● Add a node: Insert a new node at the beginning, end, or specific position.
● Delete a node: Remove a node by value or position.
● Search a node: Find if a specific value exists in the list.
*/

// Node structure class
class Node {
    constructor(data) {
        this.data = data; // stores the node's data
        this.next = null; // pointer to the next node
    }
}

// Linked List class with key operations
class LinkedList {
    constructor() {
        this.head = null; // points to the first node in the list
    }

    // Add a node at the beginning
    addAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end
    addAtEnd(data) {
        let current = this.head;
        let newNode = new Node(data);
        if (current == null) {
            this.head = newNode;
            return;
        }
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add a node at a specific position
    addAtPosition(data, position) {
        let current = this.head;
        let newNode = new Node(data);
        if (position == 0) {
            this.addAtBeginning(data);
            return;
        }
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    // Delete a node by value
    deleteByValue(value) {
        if (this.head.data == value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current != null && current.data != value) {
            prev = current;
            current = current.next;
        }
        if (current == null) {
            return;
        }
        prev.next = current.next;
    }

    // Delete a node by position
    deleteByPosition(position) {
        let current = this.head;
        let prev = null;
        if (position == 0) {
            this.head = this.head.next
            return;
        }
        for (let i = 0; i < position; i++) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }

    // Search a node by value
    search(value) {
        let current = this.head;
        while (current != null) {
            if (current.data == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Print the list (for testing purposes)
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' -> ');
    }
}

//-----------------------------------------

// Unit tests
function testLinkedList() {
    const list = new LinkedList();

    // Test addAtBeginning
    list.addAtBeginning(10);
    list.addAtBeginning(20);
    console.assert(list.printList() === '20 -> 10', 'Test failed: addAtBeginning');

    // Test addAtEnd
    list.addAtEnd(30);
    console.assert(list.printList() === '20 -> 10 -> 30', 'Test failed: addAtEnd');

    // Test addAtPosition
    list.addAtPosition(25, 2);
    console.assert(list.printList() === '20 -> 10 -> 25 -> 30', 'Test failed: addAtPosition');

    // Test deleteByValue
    list.deleteByValue(10);
    console.assert(list.printList() === '20 -> 25 -> 30', 'Test failed: deleteByValue');

    // Test deleteByPosition
    list.deleteByPosition(1);
    console.assert(list.printList() === '20 -> 30', 'Test failed: deleteByPosition');

    // Test search
    console.assert(list.search(20) === true, 'Test failed: search (found)');
    console.assert(list.search(10) === false, 'Test failed: search (not found)');
}

testLinkedList();
console.log('All tests passed!');