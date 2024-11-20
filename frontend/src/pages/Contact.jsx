import axios from 'axios'
import React, { useState } from 'react'

const contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const ContactUser = async(e) => {
    e.preventDefault()

      try {
        const response = await axios.post('http://localhost:3000/contact/submit', {
          name: name,
          email: email,
          message: message,
        })
        console.log(response)
        alert('submitted successfully')
      
      }
      catch (error) {
        console.log(error)


        alert('failed to register')
      }
    }
  
    return (
      <div>
        <form action="">
          <label htmlFor="">UserName</label><br />
          <input type="text" placeholder='Your username' onChange={(e) => setName(e.target.value)} /><br /><br />
          <label htmlFor="">E-mail</label><br />
          <input type="email" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <label htmlFor="">message</label><br />
          <textarea name='message' placeholder='message' onChange={(e) => setMessage(e.target.value)} /><br /><br />
</form>
</div>
    )
  }

export default contact
