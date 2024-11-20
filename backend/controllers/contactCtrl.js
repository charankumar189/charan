const contact = require("../model/contact")



const submitMessage = async (req,res) => {
    const body =req.body
    
    try{
        const contactForm = await contact.create({
            name:body.name,
            email:body.emial,
            message:body.message
        })
        res.send({messsage:"submitted successfully",data:contactForm})
    } catch (error){
        res.send({message:'failed'})

    }
}
module.exports = submitMessage;