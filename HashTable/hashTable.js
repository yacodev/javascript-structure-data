class HashTable{
  constructor(size){
    this.data = new Array(size);
  }
  //hash function
  hashMethod(key){
    let hash = 0;
    for (let i = 0; i<key.length; i++){
      hash = (hash+key.charCodeAt(i)*i)%this.data.length;
    }
    return hash;
  }
  //get in data
  set(key, value){
    const address = this.hashMethod(key);
    if(!this.data[address]){
      this.data[address]=[];
    }
    this.data[address].push([key,value]);
    return this.data;
  }
  //get one element
  get(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i =0;i<currentBucket.length;i++){
        if(currentBucket[i][0]===key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  //delete
  delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i=0; i<currentBucket.length;i++){
        if(currentBucket[i][0]===key){
          const dataDeleted = this.data[address][i];
          this.data[address].splice(i,1);
          return dataDeleted;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('Carlos',1986);
myHashTable.set('Monicaa',1987);