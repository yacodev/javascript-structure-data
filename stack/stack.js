class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.botton = null;
    this.length = 0;
  }
  peek(){
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length ===0){
      this.top = newNode;
      this.botton=newNode;
    }else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.length){
      console.log('there is no nodes in the stack');
      return;
    }
    const nodeDeleted = this.top;
    if(this.length===1){
      this.top=null;
      this.botton=null;
    }else{
      this.top = nodeDeleted.next;
    }
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);