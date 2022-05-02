const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;
    if (!node) {
      this.rootNode = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else if (node.left) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else if (node.right) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (!currentNode) {
        return null;
      }
    }
    return currentNode;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
  /*constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
  
    // remove line with error and write your code here
    const newNodeDate = new Node(data);
    if (this.root === null) {
      this.root = newNodeDate;
    } else {
      this.addRecursive(this.root, newNodeDate);
    }
  }

  has(data) {
    
    // remove line with error and write your code here
    let hasNode = this.root;
    while (hasNode !== null) {
      if (data === hasNode.data) {
        return true;
      } else {
        if (data > hasNode.data) {
          hasNode = hasNode.right;
        } else if (data < hasNode.data) {
          hasNode = hasNode.left;
        }
      }
    }
    return false;
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
  }*/
}

module.exports = {
  BinarySearchTree
};