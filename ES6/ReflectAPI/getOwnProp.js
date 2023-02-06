var myObj = {
    name:"menna",
    age:22
}
  
  const handler = {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
    
      return { configurable: true, enumerable: true, value: 23 };
    }
  };
  
  const myProxy = new Proxy(myObj, handler);
  
  console.log(Object.getOwnPropertyDescriptor(myProxy, 'age').value);
  