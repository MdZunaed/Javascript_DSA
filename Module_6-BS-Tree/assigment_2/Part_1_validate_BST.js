// Do not change this class
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// ✅ Your task: Complete this function
function isValidBST(root) {
  // TODO: Implement this function
}

// Do not change below this line

const assert = require('assert');


const validBST = new TreeNode(5,
  new TreeNode(3,
    new TreeNode(2),
    new TreeNode(4)
  ),
  new TreeNode(7)
);
assert.strictEqual(isValidBST(validBST), true, 'Test 1 Failed');


const invalidBST = new TreeNode(5,
  new TreeNode(3,
    new TreeNode(2),
    new TreeNode(6) // Invalid: 6 in the left subtree of 5
  ),
  new TreeNode(7)
);
assert.strictEqual(isValidBST(invalidBST), false, 'Test 2 Failed');


assert.strictEqual(isValidBST(new TreeNode(1)), true, 'Test 3 Failed');


assert.strictEqual(isValidBST(null), true, 'Test 4 Failed');


const invalidBST2 = new TreeNode(10,
  new TreeNode(5),
  new TreeNode(15,
    new TreeNode(6),
    new TreeNode(20)
  )
);
assert.strictEqual(isValidBST(invalidBST2), false, 'Test 5 Failed');

console.log("✅ All tests passed!");