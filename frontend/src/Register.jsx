import React from 'react'


const Register = () => {
  const[username,setUserName]=useState("")
  // empty string: we are saying initially that there is no email adress entered.so user ncan give email adress as they need 
  //email(variable): from model ,setEmail(function):update email address
  const[email,setEmail] =useState("")
  const[password,setPassword]=useState("")
  const navigate =useNavigate()

  const registerUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000,user/register',{
        username:username,  
        email:email,
        password:password,
      })
      console.log(response)
      alert('registered successfully')
      navigate('/login')
    } catch (error) {
      alert('failed to register')
    }  
  }
  return (
    <div>
      <form >
        <label htmlFor="">userName:</label>
        <input type="text" placeholder='your username' onChange={(e)=> setUserName(e.target.value)} />
        <br /><br />
        <label htmlFor="">Email:</label>
        <input type="text" placeholder='your email' onChange={(e)=> setEmail(e.target.value)} />
        <br /><br />
        <label htmlFor="">Password:</label>
        <input type="text" placeholder='your password' onChange={(e)=> setPassword(e.target.value)} />
        <br /><br />
        <button onClick={registerUser}>Register</button>
      </form>
     
    </div>
  )
}

export default Register
