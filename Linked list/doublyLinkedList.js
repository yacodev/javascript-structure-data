class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev:null,
    }
    this.tail = this.head;
    this.length =1;
  }
  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; //agrega el nodo
    this.tail = newNode; //definimos la nueva cola
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev=newNode;
    this.head = newNode;
    this.length ++;
    return this;
  }
  insert(index,value){
    if(index>=this.length){
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index-1);
    const  holdingPointer = firstPointer.next;
    newNode.prev=firstPointer;
    newNode.next = holdingPointer;
    firstPointer.next = newNode;
    holdingPointer.prev=newNode;
    this.length++;
    return this;
  }
  remove(index){
    if(index>this.length){
      return console.log('valor fuera de rango');
    }
    const firstPointer =this.getTheIndex(index-1);
    const lastPointer = this.getTheIndex(index+1);
    firstPointer.next=lastPointer;
    lastPointer.prev=firstPointer; 
    this.length--;
    return this;
  }
  getTheIndex(index){
    let counter = 0;
    let currentNode =this.head;
    while(counter!==index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
}

}
let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
