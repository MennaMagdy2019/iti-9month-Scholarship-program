//a- Display all documents in instructors collection
db.getCollection("instructors").find({})

//b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({ salary: { $gt: 4000 } }, { _id: 0, firstName: 1, salary: 1 })

//c- Display all instructors with ages less than or equal 25.
db.instructors.find({ age: { $lte: 25 } })

//d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).----------
db.instructors.find({$and:[{"address.city": "mansoura"}, {"address.street": { $in: [10, 14] }}] }, { _id: 0, firstName: 1, address: 1, salary: 1 })

//e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({$and:[{"courses":"js"},{"courses":"jquery"}]})  //not found
db.instructors.find({$and:[{"courses":"js"},{"courses":"mvc"}]})

//f- Display number of courses for each instructor and display first name with number of courses.
db.instructors.find({"courses" : {"$exists":true}},{}).forEach((ins) => {
    print(`${ins.firstName} , ${ins.courses?.length}`)
})

//g- Write mongodb query to get all instructors that have firstName and lastName properties , sort them by firstName ascending then by lastName descending and finally display their data FullName and age
db.instructors.find().sort({firtsName:1,lastName:-1}).forEach((ins) => 
    { 
        var fullName=ins.firstName+" "+ins.lastName; 
        print(fullName , ins.age); 
        //update 
        db.instructors.update({_id:ins._id},{$set:{fullName:fullName}});
    })
db.instructors.find()
//Bonus
let instructorsarray=[]
db.instructors.find().forEach((ins) => 
    {   
        db.instructorsData.insertOne({fullname: ins.fullName});
    })
   db.instructorsData.find()
//h- Find all instructors that have fullName that contains “mohammed”.----
db.instructors.find({$or:[{firstName:"mohammed"},{lastName:"mohammed"}]})

//i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.remove({$and:[{firstName:"ebtesam"},{courses:{$size:5}}]})

//j- Add active property to all instructors and set its value to true.
db.instructors.updateMany({},{$set:{active:true}})

//k- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
db.instructors.updateMany({$and:[{firstName:"mazen"},{lastName:"mohammed"}],courses:"EF"},{$set:{"courses.$":"jquery"}})

//l- Add jquery course for “noha hesham”.
db.instructors.updateMany({$and:[{firstName:"noha"},{lastName:"hesham"}]},{$addToSet:{courses:"jquery"}})

//m- Remove courses property for “ahmed mohammed ” instructor
db.instructors.updateMany({$and:[{firstName:"ahmed"},{lastName:"mohammed"}]},{$unset:{"courses":""}},{upsert:true})

//n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.updateMany({courses:{$size:3}},{$inc:{salary:-500}})

//o- Rename address field for all instructors to fullAddress.
db.instructors.updateMany({},{$rename:{"address":"fullAddress"}})

//p- Change street number for noha hesham to 20
db.instructors.updateMany({$and:[{firstName:"noha"},{lastName:"hesham"}]},{$set:{"fullAddress.street":20}})
db.instructors.updateMany({_id:6},{$set:{"fullAddress.street":20}})


