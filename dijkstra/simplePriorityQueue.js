class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

const result = new  PriorityQueue();

result.enqueue(34,3);
result.enqueue(24,1);
result.enqueue(18,2);

console.log(result.dequeue());
console.log(result);

