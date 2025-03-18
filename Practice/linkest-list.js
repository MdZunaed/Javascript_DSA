class Node{
    constructor(value){
        console.log("this is a Node constructor", value);
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        console.log("Appeding to list", value);
        const node = new Node(value);
        if(!this.head){
        // if(this.head == null){
            this.head = node;
            return;
        }
        // console.log("Head is not null");
        
        let cur = this.head;
        // while(cur != null){
        while(cur.next){
            cur = cur.next;
        }
        // console.log("Loop ends at:", cur);
        cur.next = node;
    }

    print(){
        console.log("Printing Linked List");
        let cur = this.head;
        while(cur){
            console.log(cur.data);
            cur = cur.next;
        }
        console.log("Linked List End");
        // 4 5 6
    }

    addNode(targetNode, value){
        const node = new Node(value);
        node.next = targetNode.next;
        targetNode.next = node;

        // h7 -> 4 -> t5 -> 9 -> 6
        
        //              9 -> 6
        //              ^
        // h7 -> 4 -> t5   


    }

    addToFirst(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    addToFirstWithRef(value){
        this.addNode(this.head, value);
    }

    // h7 -> 4 -> 5 -> 6

    find(targetValue){
        let cur = this.head;
        while(cur){
            if(cur.data == targetValue) return cur;
            cur = cur.next;
        }
        return null;
    }

    addAfterTarget(targetValue, value){
        const target = this.find(targetValue);
        this.addNode(target, value);
    }

    getMid(){
        let rabbit = this.head;
        let turtle = this.head;
        while(rabbit && rabbit.next){
            rabbit = rabbit.next;
            rabbit = rabbit.next;
            turtle = turtle.next;
        }
        return turtle;
    }

}

function demoNodes(){
    const node = new Node(4);
    const anotherNode = new Node(5);
    console.log(node);
    console.log(anotherNode);
}

// function main(){
//     const list = new LinkedList();
//     console.log(list);
//     list.append(4);
//     console.log(list);
//     list.append(5);
//     console.log(list);
//     list.append(6);
//     console.log(list);

//     list.print();
// }
function main(){
    const list = new LinkedList();
    list.append(4);
    list.append(5);
    list.append(6);

    list.print();

    list.addToFirst(7);
    list.print();
    list.addToFirst(9);
    list.print();
    list.addToFirst(13);
    list.print();
    list.addToFirst(14);
    list.print();

    
    const targetNode = list.find(5);
    console.log(targetNode);

    list.addAfterTarget(5, 12);

    list.print();

    const mid = list.getMid();
    console.log(mid);
}
main();