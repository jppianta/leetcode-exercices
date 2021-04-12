/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  if (!root) {
    return 0
  }
  
  const queue = [[root, 0]];
  const levels = [[root.val]]
  while (queue.length > 0) {
    const pair = queue.shift()
    
    const node = pair[0];
    const level = pair[1];
    
    if (level >= levels.length) {
      levels.push([])
    }
    levels[level].push(node.val);
    
    if (node.left) {
      queue.push([node.left, level + 1])
    }
    
    if (node.right) {
      queue.push([node.right, level + 1])
    }
  }
  
  return levels[levels.length - 1].reduce((acc, curr) => acc + curr, 0);
};