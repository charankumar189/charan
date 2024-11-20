import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1>hello world</h1><BiAbacus />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur, inventore dolores vero nisi </p>
      <img src="img1.avif" alt="foods" width="420" height="320" /><br/>
      

      <video loop preload="auto" autoPlay muted width="400">
      <source src="video1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Home
