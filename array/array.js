class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length]=item;
    this.length++;
    return this.data;
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem
  }
  delete(index){
    const itemDeleted = this.data[index];
    delete this.data[index];
    this.shiftIndex(index);
    return itemDeleted;
  } 
  shiftIndex(index){
    for( let i = index; i< this.length-1; i ++){
      this.data[i]= this.data[i+1];
    }
    delete this.data[this.length-1];
  }
  unshiftIndex(){
    for( let i = this.length-1; i>= 0; i --){
      this.data[i+1]= this.data[i];
    }
  }
  shift(){
  const itemDeleted = this.data[0];
  delete this.data[0];
  this.shiftIndex();
  return itemDeleted;
}
  unshift(item){
    this.unshiftIndex();
    this.data[0] = item;
    return this.data;
  }
}

const myArray = new MyArray();
myArray.push('Juan');
myArray.push('Lopez');
myArray.push('Carlos');
console.log(myArray);

