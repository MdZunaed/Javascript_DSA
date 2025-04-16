// Binary tree node structure
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  
  // Function to calculate the height of a binary tree
  function treeHeight(root) {
    // TODO: Implement this function
  }
  
  
  
  // Unit Tests
  const assert = require('assert');
  
  // Helper to build trees quickly
  const buildTree = () => {
    return new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3)
    );
  };
  
  (() => {
    assert.strictEqual(treeHeight(null), 0, 'Height of empty tree should be 0');
  
    const single = new TreeNode(1);
    assert.strictEqual(treeHeight(single), 1, 'Height of single node tree should be 1');
  
    const root = buildTree();
    assert.strictEqual(treeHeight(root), 3, 'Height of balanced tree should be 3');
    
    const leftSkewed = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    assert.strictEqual(treeHeight(leftSkewed), 3, 'Height of left-skewed tree should be 3');
  
    const rightSkewed = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    assert.strictEqual(treeHeight(rightSkewed), 3, 'Height of right-skewed tree should be 3');
  
    console.log("✅ All tests passed!");
  })();