

//////////////student////////////
db.createCollection("student",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["FirstName", "lastName", "IsFired", "FacultyID",  "Info"],
            properties:{
                FirstName:{bsonType:"string"},
                lastName:{bsonType:"string"},
                IsFired:{bsonType:"bool"},
                FacultyID:{bsonType:"number"},
                Info:{
                    bsonType:"array",
                    items:{
                        bsonType:"object",
                        required:["CourseID","Grade"],
                         properties:{
                        CourseID:{bsonType:"number"},
                        Grade:{bsonType:"number"}
                        }
                    }
                  },
            }
        }
    }
})

db.student.insertOne({FirstName:"menna",lastName:"magdy",IsFired:false,FacultyID:194912,Info:[{CourseID:5555,Grade:8.0},{CourseID:5655,Grade:7.0}]})
db.student.insertOne({FirstName:"ali",lastName:"ahmed",IsFired:false,FacultyID:194913,Info:[{CourseID:4555,Grade:8.0},{CourseID:4855,Grade:5.0}]})
db.student.insertOne({FirstName:"Ahmed",lastName:"ahmed",IsFired:false,FacultyID:194914,Info:[{CourseID:4555,Grade:5.0},{CourseID:4855,Grade:9.0}]})
db.student.find({})
/////////////////////Faculty////////////////
db.createCollection("Faculty",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["FacultyName",  "Address"],
            properties:{
               FacultyName:{bsonType:"string"},
                Address:{
                    bsonType:["object"],
                    properties:{
                        city:{bsonType:"string"},
                        Street:{bsonType:"string"}
                    }
                  },
            }
        }
    }
})

db.Faculty.insertMany([
 {_id:194912,FacultyName:"Engineering",Address:{city:"mansoura",street:"10"}},
 {_id:194913,FacultyName:"Engineering",Address:{city:"ALX",street:"20"}},
 {_id:194914,FacultyName:"Engineering",Address:{city:"Cairo",street:"20"}}
    ] )
db.Faculty.find()

/////////////////////Faculty////////////////
db.createCollection("Course",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["CourseName",  "FinalMark"],
            properties:{
               CourseName:{bsonType:"string"},
                FinalMark:{bsonType:"number"}
            }
        }
    }
})
let courses = [
              {_id:5555,CourseName:"HTML",FinalMark:70},
              {_id:5655,CourseName:"css",FinalMark:70},
              {_id:4555,CourseName:"Js",FinalMark:70},
              {_id:4855,CourseName:"scss",FinalMark:70}
              ]

db.Course.insertMany(courses)
db.Course.insertOne({_id:5055,CourseName:"Jquery",FinalMark:50})
db.Course.find()

//2. Display each student Full Name along with his average grade in all courses. $concat
db.student.aggregate([
    {
    $project:{
    FullName:{$concat:["$FirstName"," ","$lastName"]},
    AvgGrade:{$avg:"$Info.Grade"}
    }
    }])
    
//3. Using aggregation display the sum of final mark for all courses in Course collection.
db.Course.aggregate([{
    $group:{
       _id:"$FinalMark",
       count:{$sum:"$FinalMark"}
    }
}
])


//4. Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object.
db.Course.find({})
db.student.find({})

db.student.aggregate([
{
     $match:{FirstName:"menna"}
}
,
{
    $lookup:{
        from:"Course",
        localField:"Info.CourseID",
        foreignField:"_id",
        as:"std_CoursesID"
    }
}])


//5.Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup.
db.Faculty.find()
db.student.find({})
db.student.aggregate([
{
     $match:{FirstName:"menna"}
}
,
{
    $lookup:{
        from:"Faculty",
        localField:"FacultyID",
        foreignField:"_id",
        as:"std_FacultyID"
    }
}])