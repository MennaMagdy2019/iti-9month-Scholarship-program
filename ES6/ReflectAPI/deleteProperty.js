var myObj = {
    name:"menna",
    age:22
}
  
  const handler = {
    deleteProperty(target, prop) {
      if (prop in target) {
        delete target[prop];
        console.log(`property removed: ${prop}`);
      }
    }
  };
  
  console.log(myObj.name);
  
  const myProxy = new Proxy(myObj, handler);
  delete myProxy.name;
  
  console.log(myObj.name);

  