const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    const newNodeDate = new Node(data);
    if (this.rootTree === null) {
      this.rootTree = newNodeDate;
    } else {
      this.addRecursive(this.rootTree, newNodeDate);
    }
  }

  has(data) {
    return searchWithin(this.rootTree, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.date) {
        searchWithin(node.left, data);
      } else {
        searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    
    // remove line with error and write your code here
    let findNode = this.root;
    while (findNode !== null) {
      if (findNode.data === data) {
        return findNode;
      } else {
        if (data > findNode.data) {
          findNode = findNode.right;
        } else if (data < findNode.data) {
          findNode = findNode.left;
        }
      }
    }
    return null;
  }

  remove(data) {
   
    // remove line with error and write your code here
    this.data = removeNode(this.data, data)
    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        if (node.left) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      } else if (data > node.data) {
        if (node.right) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          node.left = removeNode(node.left, data);
          return node;
        }
      } else {
        node = node.right;
        return node;
      }

    }
  }

  min() {

    let curNode = this.root;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    return curNode.data;
  }
  

  max() {
    
    // remove line with error and write your code here
    let maxNode = this.root;
    while (maxNode.right !== null) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};