class Stack{
    constructor(){
      this.items = [];
    }
  
    push(element){
      this.items.push(element);
    }
  
    pop(){
      if(this.items.length == 0){
        return 'stack is empty'
      }
      return this.items.pop();
    }
  
    peek(){
      if(this.isEmpty()){
        return 'stack is empty'
      }
      return this.items[this.items.length-1]
    }
  
    isEmpty(){
      return this.items.length == 0;
    }
  
    size(){
      return this.items.length;
    }
    
    print(){
      console.log(this.items.toString())
    }  
  }
  
  const stack = new Stack() 
  stack.push(10)
  stack.push(20)
  stack.push(30)
  console.log(stack.size())
  stack.print()
  console.log(stack.peek())
  console.log(stack.pop())
  stack.print()
  