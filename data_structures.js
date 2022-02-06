//Linked List
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(data) {
    const node = new Node(data);
    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.head) {
      this.tail = node;
    }
  }

  find(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  toArray() {
    const output = [];
    let current = this.head;
    while (current) {
      output.push(current);
      current = current.next;
    }
  }
}

const list = new linkedList();
list.append('hi');
