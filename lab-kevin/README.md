#  lab 10 - Stacks and Queues

>
 - The Stack class has methods for adding and removing an item from the top of the stack as well as a method that returns the top value of the stack.   The class implements a first in last out workflow as a linked list.

- The Queue class has methods to add and remove items from the queue.  The class implements a first in first out workflow as a linked list.

- Both modules share a Node class module.
  
>## Install
    The project has the following development dependencies:
    
    "debug": "^3.1.0"

    "eslint": "^4.16.0"

    "jest": "^22.1.4"


```bash
npm i 
```

  - Run the tests!

```bash
    npm test
```

>## Usage

## Stack

 ### Methods:

  - push - adds a node with a value to the top of the stack
  
  - pop - removes a node from the top of the stack
  
  - peek - returns the value of the node at the top of the stack

  ### Properties;

  - size - the number of nodes in the stack
 
  - max_size - the number of allowable nodes 

  - nodes have value and next properties


  ### push

  - push has an arity one and is expecting a value.  

 - Throws an error for undefined values.

 - Throws an error when the max stack size has been exceeded.

 ```javascript
    'use strict';
    const Stack = require(`${__dirname}'/../lib/stack`);

    let stack = new Stack();
    stack.push(25);  //stack.top.value === 25
 ```

  ### pop
  
  - Removes the top node from the stack

  - returns the value of the removed node

  - returns null when the stack is empty

   ```javascript
    'use strict';
    const Stack = require(`${__dirname}'/../lib/stack`);

    let stack = new Stack();
    stack.pop() // returns null
    stack.push(25);  //stack.top.value === 25
    stack.push(8);  //stack.top.value === 8
    stack.pop() // returns 8 => stack.head.value === 25
 ```

 ### peek

  - Returns the value of the top node on the stack

  ```javascript
    'use strict';
    const Stack = require(`${__dirname}'/../lib/stack`);

    let stack = new Stack();
    stack.push(25);    // stack.head.value === 25
    stack.push(8);   // stack.head.value === 8
    stack.pop()    // returns 8
    stack.peek()   // returns 25
 ```

 ## Queue

### Methods:

  - enqueue - adds a node with a value to the queue
  
  - dequeue- removes the oldest node from the queue

  ### Properties;

  - size - the number of nodes in the queue
 
  - max_size - the number of allowable nodes 

  - tail - the last node in the queue

  - nodes have value and next properties


 ### enqueue

  - Has an arity of one and adds a node with that value to the queue

 - Throws an error for undefined values.

 - Throws an error when the max queue size has been exceeded.


 ```javascript
    'use strict';
    const Queue = require(`${__dirname}'/../lib/queue`);

    let queue = new queue();
    queue.enqueue(25);  // queue.head.value === 25
                        // queue.tail.value ===25
      queue.enqueue(13);  // queue.head.value === 13
                          // queue.tail.value ===25
 ```


### dequeue

  - Removes the oldest node in the queue and returns the value.

  - Returns null if the queue is empty.

 ```javascript
    'use strict';
    const Queue = require(`${__dirname}'/../lib/queue`);

    let queue = new queue();
    queue.dequeue();     // returns null
    queue.enqueue(25);  // queue.head.value === 25
                        // queue.tail.value ===25
    queue.enqueue(13);  // queue.head.value === 13
                        // queue.tail.value ===25
     queue.enqueue(66);  // queue.head.value === 66
                        // queue.tail.value ===25                    
    queue.dequeue();  // returns 25
                      // queue.head.value === 66
                      // queue.tail.value ===13
 ```


## License

[MIT](http://vjpr.mit-license.org) 