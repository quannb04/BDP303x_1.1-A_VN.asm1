class FunixQueue {
  elements = [];

  size() {
    return this.elements.length;
  }

  add(element) {
    this.elements.push(element);
    return this.elements.length;
  }

  peek() {
    if(this.size() == 0) {
      return "undefined";
    }
    return this.elements[0];
  }

  dequeue() {
    if(this.size() == 0) {
      return "there are no elements on the queue";
    }
    return this.elements.shift();
  }
}

module.exports = FunixQueue;
