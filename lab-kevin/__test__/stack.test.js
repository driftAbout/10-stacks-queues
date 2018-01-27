'use strict';

const Stack = require(`${__dirname}'/../lib/stack`);

describe('Stack class', () => {
  beforeEach( () => {
    this.stack = new Stack();
  });
  it('stack module should exist', () => {
    expect(Stack).toBeDefined();
  });

  describe('Valid input', () => {
    it('should define stack', () => {
      expect(this.stack).toBeDefined();
    });

    it('Should have a top with value of null when creating a new stack', () => {
      expect(this.stack.top).toBeNull();
    });

    it('Should add a value to the beginning of a new the stack', () => {
      this.stack.push(7);
      expect(this.stack.top.value).toEqual(7);
      expect(this.stack.size).toEqual(1);
    });

    it('Should have the last value as the beginning of the stack', () => {
      [1,2,3].forEach(val => this.stack.push(val));
      expect(this.stack.top.value).toEqual(3);
      expect(this.stack.size).toEqual(3);
    });

    it('Should remove the first item in the stack', () => {
      [1,2,3].forEach(val => this.stack.push(val));
      let initSize = this.stack.size;
      this.stack.pop();
      expect(this.stack.top.value).toEqual(2);
      expect(this.stack.size).toEqual(initSize - 1);
    });

    it('Should retrun the top value in the stack', () => {
      [1,2,3].forEach(val => this.stack.push(val));
      expect(this.stack.peek()).toEqual(3);
    });

  });

  describe('Invalid input', () => {
    it('Should not add nodes with undefined values, should throw error', () => {
      expect( () => { 
        this.stack.push();
      }).toThrow('Invalid input: Value is undefined');
    });

    it('Should not add nodes when max-size is reached, should throw error', () => {
      this.stack.max_size = 3;
      [1,2,3].forEach(val => this.stack.push(val));
      expect( () => { 
        this.stack.push(4);
      }).toThrow('Stack Overflow: Stack is at Max-size');
    });

    it('Should return null when attempting to pop() an empty stack', () => {
      expect(this.stack.pop()).toBeNull();
    });
    
  });

});