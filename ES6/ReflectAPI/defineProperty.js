
var myObj = {
    name:"menna",
    age:22
}

const handler = {
    defineProperty(target, key, descriptor) {
      defineProp(key, 'define');
      return true;
    }
  };
  
  function defineProp(key, action) {
    if (key[0] === '_' ) {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
  }

  const myProxy = new Proxy(myObj, handler);
  
  console.log(myProxy.getfullname = 'mennamagdy');
  console.log(myProxy._getfullname = 'mennamagdy'); //error