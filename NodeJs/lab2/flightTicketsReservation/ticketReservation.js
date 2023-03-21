class FlightTickets {
    tickets=[];
    addTicket(id,seatNum,flightNum,depatureAirport,arrivalAirport,travellingDate){
        this.tickets.push({
            "id":id,
            "seatnum":seatNum,
            "flightNum":flightNum,
            "depatureAirport":depatureAirport,
            "arrivalAirport":arrivalAirport,
            "travellingDate":travellingDate
        })
    }
      displayTickets = ()=>{  /////////
        return this.tickets
    }
    getTicket(id){
        for(let i =0;i<this.tickets.length;i++){
           if(this.tickets[i].id==1){
             return(this.tickets[i])
           }
        }
    }
    // updateseatNum(id,seatnum){
    //     for(let i =0;i<this.tickets.length;i++){
    //         if(this.tickets[i].id==id){
    //             this.tickets[i].seatnum = seatnum
    //             console.log("seatnum Updated")
    //           return(this.tickets[i])
    //         }
    //      }
    // }
    updateTicket(id,prop,value){
        for(let i =0;i<this.tickets.length;i++){
            if(this.tickets[i].id==id){
                this.tickets[i][prop] = value
                console.log("Updated Tickets")
              return(this.tickets[i])
            }
    }
}
    updateAllTicket(id,seatNum=this.tickets[id-1].seatNum,flightNum=this.tickets[id-1].flightNum,depatureAirport=this.tickets[id-1].depatureAirport,arrivalAirport=this.tickets[id-1].arrivalAirport,travellingDate=this.tickets[id-1].travellingDate){
       
                this.tickets[id-1]= {"id":id , "seatNum":seatNum,"flightNum":flightNum,"depatureAirport":depatureAirport,"arrivalAirport":arrivalAirport,"travellingDate":travellingDate}
                console.log("Updated Tickets")
            return(this.tickets[id-1])
            
    }

}
//     return(this.tickets[i])
// }
// updateAllTicket(id,seatNum=this.tickets[id][seatNum],flightNum=this.tickets[id][flightNum]){
// }


module.exports = {FlightTickets}