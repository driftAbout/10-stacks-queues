'use strict';

const Queue = require('../lib/queue');

describe('Queue class', () => {
  describe('Valid input', () => {
    beforeAll( () => {
      this.queue = new Queue();
    });
    it('Should add a value to the beginning of the que and set the tail');
    expect(this.queue.enqueue(7)).head.value.toBe(7);
  });
});