
//3
var fruits = ["apple" , "strawberry" , "banana" , "orange" , "mango"]

//  every()
console.log(fruits.every(checkstr))
function checkstr(elem){
    return (typeof(elem) === 'string') 
}

//  some()
var sometest= fruits.some(elem => elem.startsWith("a") )
console.log(sometest)

// filter()
var filterarr = fruits.filter(elem => (elem.startsWith("b") || elem.startsWith("s")))
console.log(filterarr)

// map()
var maparr = fruits.map(elem => `I Like ${elem}`);

// forEach()
maparr.forEach(element => {
    console.log(element)
});