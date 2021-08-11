import React,{useState} from 'react'

export default function HOOKS_USESTATE() {
    const [count,setCount]=useState(0)
    const handleEvent=()=>{
     setCount(count + 1)
    }
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={handleEvent}>+</button>
        </div>
    )
}
