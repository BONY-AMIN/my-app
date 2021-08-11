import React,{useState} from 'react'
import style from './form.module.css'

export default function Form() {
    const [user,setUser]=useState({name:'',email:'',password:''})
    const{name,email,password}=user;

    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPass]=useState("");

    const nameChange=(e)=>{
        setUser({name:e.target.value,email,password})
        // setName(e.target.value);
   }
   const emailChange=(e)=>{
    setUser({name,email:e.target.value,password})
    // setEmail(e.target.value);
}
  const passChange=(e)=>{
    setUser({name,email,password:e.target.value})
    // setPass(e.target.value);
  }
  const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    //   let elementName=e.target.name;
    //   if(elementName === 'name'){
    //     setUser({name:e.target.value,email,password})
    //   }if(elementName === 'email'){
    //     setUser({name,email:e.target.value,password})
    //   }if(elementName ==='password'){
    //     setUser({name,email,password:e.target.value})
    //   }
  }
const handleSubmit=(e)=>{
    // let userInfo={
    //     // name:name,
    //     // email:email,
    //     // password:password
    //     name,
    //     email,
    //     password
    // }
console.log(user);
console.log(name,email,password);
e.preventDefault()
}
    return (
        <div>
           <h1>Registration</h1>
           <form action="" onSubmit={handleSubmit}>
             <div className={style.fromGroup}>
             <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={name} onChange={handleChange} required></input>
              {/* onChange={nameChange} */}
              </div>
              <div className={style.fromGroup}>
               <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleChange} required></input>
              {/* onChange={emailChange} */}
              </div>
              <div className={style.fromGroup}>
               <label htmlFor="password">Password:</label>
              <input type="text" name="password" id="password" value={password} onChange={handleChange} required></input>
              {/* onChange={passChange} */}
              </div>
              <div className={style.fromGroup}>
                  <button type="submit">Reg</button>
              </div>
            </form> 
        </div>
    )
}
