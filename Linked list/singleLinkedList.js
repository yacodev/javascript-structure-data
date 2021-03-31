/* let singleLinkedList = {
  head :{
    value : 1,
    next :{
      value : 2,
      next :{
        value :3,
        next :{
          value:4,
          next:null,
        }
      }
    }
  }
} */

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length =1;
  }
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode; //agrega el nodo
    this.tail = newNode; //definimos la nueva cola
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
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
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  remove(index,value){
    if(index>this.length){
      return console.log('valor fuera de rango');
    }
    const firstPointer =this.getTheIndex(index-1);
    const lastPointer = this.getTheIndex(index+1);
    firstPointer.next=lastPointer;
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

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);