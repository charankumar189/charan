
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[email,setEmail]=useState("")
  const[register,setRegister]=useState("")
  const navigate= useNavigate()

  const LoginUser =async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost/3000/user/login',{
        email:email,
        password:password
      })
      console.log(response)
      alert('login successful')
      navigate('/home')
      
    } catch (error) {
      alert('failed to login')
    }
    
  }
  return (
    <div>
        <form action="">
            <label htmlFor="">E-mail</label><br />
            <input type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" placeholder='Your password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={loginuser}>LOGIN</button><br /><br />
        </form>
    </div>
)
}
    
export default Login
