class FunixQueue {
  size() {
    return this.elements.length;
  }

  add(element) {
    this.elements.push(element);
    return this.elements.length;
  }
}

module.exports = FunixQueue;
