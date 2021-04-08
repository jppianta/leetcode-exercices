/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
​
/*
line = [[3, 0]], res = []
[[9, 1], [20, 1]], [[3]]
[[20, 1]], [[3], [9]]
[[15, 2], [7, 2]], [[3], [9 ,20]]
*/
var levelOrder = function(root) {
    const line = []
    const res = []
    if (root) {
        line.push([root, 0])
    }
    while (line.length > 0) {
        const item = line.shift()
        const level = item[1];
        const node = item[0];
        if (!res[level]) {
            res.push([node.val])
        } else {
            res[level].push(node.val)
        }
        if (node.left) {
            line.push([node.left, level + 1])
        }
        if (node.right) {
            line.push([node.right, level + 1])
        }
    }
    return res
};