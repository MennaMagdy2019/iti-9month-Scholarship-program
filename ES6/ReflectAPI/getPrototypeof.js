
const myObj = {
  name:"menna",
  age:22
}
  
  const proto1 = Reflect.getPrototypeOf(myObj);
  
  console.log(proto1);
  console.log(Reflect.getPrototypeOf(proto1));
  