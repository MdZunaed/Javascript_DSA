// 5, 4, 6, 2, 3, 7, 8, 1, 9
/*  
        5
       / \
      4   6
     /     \
    2       8
   / \     / \
  1   3   7   9

*/
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function makeTree() {
    // 5, 4, 6, 2, 3, 7, 8, 1, 9
    const root = new Node(5);
    root.left = new Node(4);
    root.right = new Node(6);
    root.left.left = new Node(2);
    root.left.left.right = new Node(3);
    root.right.right.left = new Node(7);
    root.right.right = new Node(8);
    root.left.left.left = new Node(1);
    root.right.right.right = new Node(9);
    return root;
}

function preOrder(root) {
    if (root == null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);

    // 5, 4, 6, 2, 3, 7, 8, 1, 9
    // 5,4,2,1,3,6,8,7,9
}

function inOrder(root) {
    if (root == null) return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);

    // 5, 4, 6, 2, 3, 7, 8, 1, 9
    // 1,2,3,4,5,6,7,8,9
}

function postOrder(root) {
    if (root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);

    // 5, 4, 6, 2, 3, 7, 8, 1, 9
    // 1,3,2,4,7,9,8,4,6,5
}

function main() {
    const tree = makeTree();

    console.log("Pree-Order:");
    preOrder(tree);

    console.log("In-Order:");
    inOrder(tree);

    console.log("Post-Order:");
    postOrder(tree);

}

main();
