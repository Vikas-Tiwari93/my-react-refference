import { useState } from "react"

 const Formfunc= () =>{
const[usename,setname]=useState('')
const[city,setcity]=useState('')
const[password,setpassword]=useState('')
const[gender,setgender]=useState('')
const[hobby,sethobby]=useState('')
const[range,setrange]=useState(2)
const[option,setoption]=useState('none')


const statechange = (e) => {
    if(e.target.name==="usename"){ setname(e.target.value);console.log(e.target.value)}
   else if(e.target.name==="city"){setcity(e.target.value);console.log(e.target.value)}
   else if(e.target.name==="password"){setpassword(e.target.value);console.log(e.target.value)}
   else if(e.target.name==="gender"){ setgender(e.target.value);console.log(e.target.value)}
   else if(e.target.name==="hobby"){sethobby(hobby + e.target.value);console.log(e.target.value)}
   else if(e.target.name==="Range"){ setrange(e.target.value);console.log(e.target.value)}
    else if(e.target.name==="select"){ setoption(e.target.value);console.log(e.target.value)}
 
   
  };

return(
    <>
    <form action="">
    <div><label htmlFor="">name</label> <input name="usename" type="text"    value={usename} onChange={statechange} /></div>
    <div><label htmlFor="">city</label> <input name="city" type="text"    value={city} onChange={statechange} /></div>
    <div><label htmlFor="">password</label> <input name="password" type="password"   value={password} onChange={statechange} /></div>
    <div><label htmlFor="">Male</label> <input name="gender" type="radio"    value="male" onChange={statechange} /> <label htmlFor="">Female</label> <input name="gender" type="radio"    value="female" onChange={statechange} /></div>
    <div> 
        <input name="hobby" value="painting" onChange={statechange} type="checkbox"    /><label htmlFor=""> painting</label>
        <input name="hobby" value="running" onChange={statechange}  type="checkbox"    /><label htmlFor=""> running</label>
        <input name="hobby" value="music" onChange={statechange}  type="checkbox"    /><label htmlFor=""> music</label>
        <input name="hobby" value="dancing"onChange={statechange} type="checkbox"   /><label htmlFor="">dancing</label>
        <input name="hobby" value="running"onChange={statechange} type="checkbox"/><label htmlFor=""> running</label>
    </div>

    <div><label htmlFor="">Rating</label> <input  type="range" value={range} name="Range" max="10" onChange={statechange} /></div>
   <label htmlFor="">my options</label> <select name="select" id="" value={option} onChange={statechange}> select option
        <option value="opt1"> opt1</option>
        <option value="opt2">opt2</option>
        <option value="opt3">opt3</option>
        <option value="opt4">opt4</option>
    </select>
    </form>
      </>
)

}

export default Formfunc