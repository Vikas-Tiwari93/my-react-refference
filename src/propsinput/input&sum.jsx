import { useEffect, useState } from "react";
export default function Inputsum({ number }) {
  const [data, setdata] = useState([]);
  const [sum, setsum] = useState("");
  //initialise data
useEffect(
    ()=>{ for (let i = 0; i < number; i++) {
        data.push("");
      }}
   ,[number])
  
  //sum


  //setdata
  const setdatafn = (e) => {
    const { id, value } = e.target;
    let newdata = [...data];
    newdata[id] = Number(value);
    setdata(newdata);
    console.log(data);

    setsum(()=>{for(let i=0;i<data.length;i++){return sum+e.target.value}})
  };



  return (
    <>
      {data.map((e, i) => {
        console.log(i);
        return (
          <input
            type="number"
            value={data[i]}
            id={i}
            key={i}
            onChange={setdatafn}
          />
        );
      })}
      <div>sum:{sum}</div>
    </>
  );
}

