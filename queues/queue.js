class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek(){
    return this.first;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.length===0){
      this.first=newNode;
      this.last=newNode;
    }else{
      this.last.next=newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){
    const nodeDeleted = this.first;
    if(this.length===1){
      this.first=null;
      this.last=null;
    }else{
      this.first=nodeDeleted.next;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
