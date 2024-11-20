import React, { useState } from 'react'

export default function Counter() {
    const [count,setcount]=useState(0);
    return(
        <div>
            <p>current count : {count}</p>
            <button onClick={()=> setcount(count+2)}>increment</button>
         </div>
    )
}


