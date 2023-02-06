function courseInfo(courseObj){
    var defaultCourseObj = {
        courseName: "ES6",
        courseDuration: "3days",
        courseOwner: "JavaScript"
    }
    var objkeys = Object.keys(courseObj)
    for( var item =0 ;item<objkeys.length; item++){
        if(! defaultCourseObj.hasOwnProperty(objkeys[item])){
           throw `you enter property not found : ${objkeys[item]}`
        }
        
    }
  //  console.log(defaultCourseObj.hasOwnProperty(Object.keys(courseObj)))
    var res = Object.assign({},defaultCourseObj,courseObj)
    return `your courseName is ${res.courseName} and courseDuration is ${res.courseDuration} and courseOwner is ${res.courseOwner}`
}
console.log(courseInfo({courseName:"nextJs"}))

console.log(courseInfo({courseName:"js",courseDuration:"2Days", courseOwner:"html"}))

console.log(courseInfo({courseName:"js",add:"cairo", courseOwner:"html"}))