const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerschema.js")
const port=2003

app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://Mounikasri:mounikakolli@cluster0.jv7bxby.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("connection establishment")
	})
	.catch((err)=>{
		console.log(err)
	})
app.get("/",(req,res)=>{
	res.send("today is a beautiful day")
})

app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="user1@gamil.com",passcode="1703"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})

app.listen(port,()=>console.log("server is running on port",port))