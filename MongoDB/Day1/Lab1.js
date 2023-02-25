
db.getCollection("instructors").find({})
db.instructors.insert({name:"ahmed" ,salary:5000})
db.instructors.insert({fname:"ahmed" ,lname:"khaled",salary:5000})
db.instructors.insert({fname:"mahamed" ,lname:"kamel",salary:10000})

let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
                
		];

		db.instructors.insertMany(instructorsArray)
		
		//a- Display all documents for instructors collection
		db.getCollection("instructors").find()
		//b- Display all instructors with fields firstName, lastName and address
		db.getCollection("instructors").find({},{_id:0,firstName:1,lastName:1,address:true})
		//c- Display firstName and city(not full address) for instructors with age 21.
		db.getCollection("instructors").find({age:21},{_id:0,firstName:1,"address.city":true})

		//d- Display firstName and age for instructors live in Mansoura city.
		db.getCollection("instructors").find({"address.city":"mansoura"},{_id:0,firstName:1,age:true})
		//e
		db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
		
		g// remove  document
		db.instructors.remove({name:"ahmed" ,salary:5000})