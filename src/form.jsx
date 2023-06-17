import { Component } from 'react'


export default class Form extends Component {
  state = {
    name:"",
    email:"",
    gender:""
  }
  statesetter=(e)=>{
    const {name,value}= e.target;
    console.log(name,value)
    this.setState({
        [name]:value
      });

  }


  render() {
    return (<>
    <form action="" className='myform'>
    <div><label htmlFor="">name</label><input name='name' type="text" value={this.state.name} onChange={this.statesetter}/></div> 
     <div><label htmlFor="">email</label><input name="email" type="email"value={this.state.email} onChange={this.statesetter}  /></div>
     <div>
      <label htmlFor="">male</label>  <input name="gender" type="radio" value='male' onChange={this.statesetter} />
    <label htmlFor="">female</label> <input name="gender" type="radio" value='female' onChange={this.statesetter} /></div>
     <input type="submit" />
     </form>
     <div>
        <div>name:{this.state.name.length}</div>  <div>email:{this.state.email}</div>
        <div>gender:{this.state.gender}</div>
     </div>
     </>
    )
  }
}