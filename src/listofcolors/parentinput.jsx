import { useState } from "react";
import Childlist from "./childlist";

export default function Parentinput() {
  const [data, setdata] = useState("");
  const [childdata, setchilddata] = useState([]);
  const setdatafn = (e) => {
    let { value } = e.target;
    setdata(() => {
      return value;
    });
  };
  let newdata;
  const expandlist = (elm) => {
    newdata = elm;
    console.log("newdata", newdata);
    console.log("elm", elm);
  };

  const senddata = () => {
    setchilddata((lastdata) => {
      lastdata = [...lastdata, ...newdata];

      return lastdata;
    });
    console.log("updated data:", childdata);
    setchilddata([...childdata, data]);
  };

  return (
    <>
      <input name="" type="text" value={data} onChange={setdatafn} />
      <button onClick={senddata}>click me</button>
      <Childlist listToParent={expandlist} newdata={childdata} />
    </>
  );
}
