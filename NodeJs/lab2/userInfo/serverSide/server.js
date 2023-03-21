const http = require("http")
const fs = require("fs");
let data = "data.json"
const { profile } = require("console");

var mainHtml = fs.readFileSync("../clientSide/main.html").toString();
var profileHtml = fs.readFileSync("../clientSide/profile.html").toString();
var styleCss = fs.readFileSync("../clientSide/style.css").toString();
var scriptJS = fs.readFileSync("../clientSide/script.js").toString();
//var favIcon = fs.readFileSync("../clientSide/download (1).jfif").toString();
var userName=" "
http.createServer((req,res) => {
    if(req.method == "GET"){
        switch(req.url){
            case "/":
            case "/main.html":
            case "/clientSide/main.html":

                res.write(mainHtml)
            break;
            case "/profile.html":
            case "/clientSide/profile.html":
                res.write(profileHtml)
            break;
            case "/style.css":
            case "/clientSide/style.css":
                res.write(styleCss)
            break;
            case "/script.js":
            case "/clientSide/script.js":
                res.write(scriptJS)
            break;
            case "/serverSide/data.json":
                var rdFile = fs.readFileSync("../serverSide/data.json").toString();  //to get updated data every call get
                res.write(rdFile)

        }
        res.end();
    }
    //recive Data
    if(req.method == "POST"){
        req.on("data" , function(data){
            dataSplit = data.toString().split("&")
           userName = dataSplit[0].split("=")[1]
           mobileNum = dataSplit[1].split("=")[1]
           email = dataSplit[2].split("=")[1].replace("%40","@")
           address = dataSplit[3].split("=")[1]
            console.log(userName)
            console.log(mobileNum)
            console.log(email)
            console.log(address)
           // console.log(dataSplit.toString())
          
        })

        req.on("end",() => {
            res.setHeader("content-type" , "text/html")
            profileHtml = profileHtml.replace("{clientName}",userName)
            profileHtml = profileHtml.replace("{mobileNum}",mobileNum)
            profileHtml = profileHtml.replace("{email}",email)
            profileHtml = profileHtml.replace("{address}",address)
            res.write(profileHtml)
            res.end()

            // adding data to json file
            let datajson = { "name": userName, "address": address,"email":email, "mobileNum": mobileNum }
           // fs.appendFileSync("data.json", JSON.stringify(datajson)+",")
            let jsonArray = fs.readFileSync(data,"utf-8")
            jsonArray = JSON.parse(jsonArray)
            jsonArray.push(datajson)
            fs.writeFileSync(data,JSON.stringify(jsonArray))
           // console.log(JSON.stringify(datajson))
            
            profileHtml = profileHtml.replace(userName,"{clientName}")
            profileHtml = profileHtml.replace(mobileNum,"{mobileNum}")
            profileHtml = profileHtml.replace(email,"{email}")
            profileHtml = profileHtml.replace(address,"{address}")
        })
    }
}).listen("7002",() => {console.log("http://localhost:7002")})