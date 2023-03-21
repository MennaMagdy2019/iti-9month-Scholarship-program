var express = require('express');
var app = express();
var fs = require("fs")
let datafile = "data.json"
var profileHtml = fs.readFileSync("../clientSide/profile.html").toString();

// to get data from forms
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
const path = require("path");

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "../clientSide/main.html"))
})
// app.get("/profile.html",(req,res)=>{
//    res.sendFile(path.join(__dirname, "../clientSide/profile.html"))
// })
app.get("/main.html",(req,res)=>{
   res.sendFile(path.join(__dirname, "../clientSide/main.html"))
})
app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname, "../clientSide/style.css"))
 })
 app.get("/data.json",(req,res)=>{
    res.sendFile(path.join(__dirname, "../serverSide/data.json"))
 })

 app.get("/serverSide/data.json",(req,res)=>{
   res.sendFile(path.join(__dirname, "../serverSide/data.json"))
})

 app.post("/profile.html",(req,res) => {
    //console.log(req.body)
    var data =req.body;
    

  // res.send(`<h1>${data.name}</h1><h1>${data.email}</h1><h1>${data.MobileNumber}</h1><h1>${data.Address}</h1>`)

  res.setHeader("content-type" , "text/html")
 
   profileHtml = profileHtml.replace("{clientName}",data.MobileNumber)
   profileHtml = profileHtml.replace("{mobileNum}",data.MobileNumber)
   profileHtml = profileHtml.replace("{email}",data.email)
   profileHtml = profileHtml.replace("{address}",data.Address)
  
  
  res.write(profileHtml)
  res.send();
  let jsonArray = fs.readFileSync("./data.json")
  //console.log(jsonArray)
  jsonArray = JSON.parse(jsonArray)
  jsonArray.push(data)
  fs.writeFileSync(datafile,JSON.stringify(jsonArray))
  
//   fs.readFileSync("../clientSide/profile.html").toString() = profileHtml
//fs.writeFile("../clientSide/profile.html",repl())
   //res.sendFile(path.join(__dirname, "../clientSide/profile.html"))
   
     //reset values
   //  profileHtml = profileHtml.replace(data.name,"{clientName}")
   //  profileHtml = profileHtml.replace(data.MobileNumber,"{mobileNum}")
   //  profileHtml = profileHtml.replace(data.email,"{email}")
   //  profileHtml = profileHtml.replace(data.Address,"{address}")

})
 
app.listen(7005, ()=>{console.log("http://localhost:7005")})