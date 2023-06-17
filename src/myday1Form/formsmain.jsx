import { useState } from "react";
import AddTodo from "./addTodo";
import Formchild from "./formchild";
import ListTodo from "./listTodo";
import Showtodo from "./showtodo";


export default function Formsmain() {
    const[data, setdata]=useState([])

const makelist=(newdata)=>{setdata( [...data, newdata])

}
console.log("parentdata",data)
  return (
    <>
    <Formchild/>
    <AddTodo newadd={makelist}/>
    <ListTodo list={data} />
    <Showtodo/>
    </>
  )
}
