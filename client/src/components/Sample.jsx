import React, { useState } from 'react'

const Sample = () => {
  const [x,setx] = useState(0);

  const clicked = () => {
    // alert('submitted')
    console.log('clicked')
    setx(x+1);
    console.log(x)
  }

    let sentence ="zehyr technology";
    let name ="abcd";
    let place ="mangalore";
    const languages=["tulu","english","kannada"];

    let work="frontend";

    // const clicked = () => {
    //     alert('submitted')
    //     console.log('submitted')
    // }
  return (
    <div>
    <h1>{sentence}</h1>
    <hr/>
    <h5>{name}</h5>
    <p>{place}</p>

    {/*map method*/}
    {languages.map((value)=> {
        return <p className='p'>{value}</p>

    })}

    {/*ternary operator*/}
    {work === "frontend" ? <h6>frontend</h6>: <h6>backend</h6>}

    {/*event handler*/}
    {x}
    <button onClick={()=>{clicked()}}>touch me</button>
    </div>
  )
}

export default Sample

