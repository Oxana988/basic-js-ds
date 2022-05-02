const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor(){
    this.queue = [];
  }


  getUnderlyingList() {

    // remove line with error and write your code here
    let list = null;
    for(let i = this.queue.length; i > 0; i--){
     let link = list;
      list = {value:this.queue[i-1], next: 0};
      list['next'] = link;
    } 
    return list;
  }

  enqueue(value) {
    
    // remove line with error and write your code here
    this.queue.push(value);
  }

  dequeue() {
   
    // remove line with error and write your code here
   return this.queue.shift();

  }

}

module.exports = {
  Queue
};
