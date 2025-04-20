// Do not change this class
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// ✅ Your task: Complete this function
function searchBST(root, target) {
  if (root == null) return null;

  if (target > root.value) return searchBST(root.right, target);
  if (target < root.value) return searchBST(root.left, target);

  if (root.value == target) {
    return root;
  }
}

// Do not change below this line

const assert = require('assert');

// Helper function to build a sample BST
const buildSampleTree = () => {
  return new TreeNode(8,
    new TreeNode(3,
      new TreeNode(1),
      new TreeNode(6,
        new TreeNode(4),
        new TreeNode(7)
      )
    ),
    new TreeNode(10,
      null,
      new TreeNode(14,
        new TreeNode(13),
        null
      )
    )
  );
};


let root = buildSampleTree();
let found = searchBST(root, 6);
assert.strictEqual(found?.value, 6, 'Test 1 Failed');


found = searchBST(root, 14);
assert.strictEqual(found?.value, 14, 'Test 2 Failed');


found = searchBST(root, 5);
assert.strictEqual(found, null, 'Test 3 Failed');


found = searchBST(null, 10);
assert.strictEqual(found, null, 'Test 4 Failed');


root = new TreeNode(42);
found = searchBST(root, 42);
assert.strictEqual(found?.value, 42, 'Test 5 Failed');

console.log("✅ All tests passed!");