 const express=require("express")
 const path=require("path")
 const app=express();
 app.set("views",path.join(__dirname,"views"))
 app.set("view engine", "jade")

 app.use("/",(req,res)=>{
    //  res.sendFile(path.join(__dirname,"public/download (5).png"))
    //  res.download(path.join(__dirname,"public/download (5).png"),"a.jpeg")
//  res.render("index" ,{title:'express'})
 res
 .status(201)
 .cookie("toke","test",{
     expire: new Date(Date.now()+8*3600000)
 })
 .cookie("hello","hello")
 .redirect(301,"/admin")
    })

 app.listen(3001,function(req,res){
    console.log("port is running")
})



