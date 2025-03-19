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

    addAtPosition(data, position) {
        let current = this.head;
        let newNode = new Node(data);
        if (position == 0) {
            this.addAtBeginning(data);
            return;
        }
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
            if (current == null) {
                return;
            }
        }
        newNode.next = current.next;
        current.next = newNode;
    }

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
            if (current == null) {
                return;
            }
        }
        prev.next = current.next;
    }
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

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return console.log(result.join(' -> '));
    }
}



let list = new LinkedList();
list.printList();
list.addAtBeginning(5);
list.printList();
list.addAtBeginning(4);
list.printList();
list.addAtEnd(6);
list.printList();
list.addAtPosition(8, 2);
list.printList();
console.log(list.search(8));
list.deleteByValue(8);
list.printList();
list.deleteByPosition(7);
list.printList();

