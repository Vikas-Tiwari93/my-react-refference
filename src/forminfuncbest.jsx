import { useState } from "react"

 const Formfuncbest= () =>{
const[data,setdata]=useState({usename:"", city:"", password:"", gender:"",Range:"",hobby:"",select:"none"})



const statechange = (e) => {
   const{name,value}= e.target;
   console.log(name, value)
   setdata({...data,[name]:value})
 
   
  };

return(
    <>
    <form action="">
    <div><label htmlFor="">name</label> <input name="usename" type="text"    value={data.usename} onChange={statechange} /></div>
    <div><label htmlFor="">city</label> <input name="city" type="text"    value={data.city} onChange={statechange} /></div>
    <div><label htmlFor="">password</label> <input name="password" type="password"   value={data.password} onChange={statechange} /></div>
    <div><label htmlFor="">Male</label> <input name="gender" type="radio"    value="male" onChange={statechange} /> <label htmlFor="">Female</label> <input name="gender" type="radio"    value="female" onChange={statechange} /></div>
    <div> 
        <input name="hobby" value="painting" onChange={statechange} type="checkbox"    /><label htmlFor=""> painting</label>
        <input name="hobby" value="running" onChange={statechange}  type="checkbox"    /><label htmlFor=""> running</label>
        <input name="hobby" value="music" onChange={statechange}  type="checkbox"    /><label htmlFor=""> music</label>
        <input name="hobby" value="dancing"onChange={statechange} type="checkbox"   /><label htmlFor="">dancing</label>
        <input name="hobby" value="running"onChange={statechange} type="checkbox"/><label htmlFor=""> running</label>
    </div>

    <div><label htmlFor="">Rating</label> <input  type="range" value={data.rating} name="Range" max="10" onChange={statechange} /></div>
   <label htmlFor="">my options</label> <select name="select" id="" value={data.select} onChange={statechange}> select option
        <option value="opt1"> opt1</option>
        <option value="opt2">opt2</option>
        <option value="opt3">opt3</option>
        <option value="opt4">opt4</option>
    </select>
    </form> 
    <div>
        {data}
    </div>

      </>
)

}

export default Formfuncbest