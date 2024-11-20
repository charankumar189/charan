const user = require("../model/user")

// here, login is marked as async,so it can use await inside.
// await user.findOne(...) means javascri
const login = async (req, res) => {
    const body = req.body;

     const findUser = await user.findOne({
        // awaits: it tells javascript to wait untill that operation completes.
        email: body.email

    })
    res.send({messsage: "login successful", data: findUser})

}

const Register = async (req,res) => {
    const body = req.body

    const saveData = await user.create({
        // it inserts new data. and stores it in saveData.
        username: body.username,
        email:body.email,
        password: body.password
     }) 
    //  saves in mongo database
    res.send({ message: "Registered successfully",data: saveData})
}