var http = require("http")
const { stringify } = require("querystring")
var mymodule = require("./ticketReservation")
//console.log(mymodule)

// http.createServer((req,res) => {
//    // res.write(stringify(user.displayTickets()))
//     res.end()
// }).listen("7000",() => {console.log("http://localhost:7000")} )
var TicketsClass = mymodule.FlightTickets

var user = new TicketsClass()
user.addTicket(1,10,2,"9:00","10:00","6/3/2023")
user.addTicket(2,11,12,"9:00","11:00","16/3/2023")
//console.log(TicketsClass.displayTickets())
console.log(user.displayTickets())
console.log(user.getTicket(1))
console.log(user.updateTicket(1,"seatnum" , 5))
console.log(user.updateAllTicket(2,12,13,"10:00" ))

