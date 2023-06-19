import { useState } from "react";
import Childlist from "./childlist";

export default function Parentinput() {
  const [data, setdata] = useState("");

  const setdatafn = (e) => {
    let { name, value } = e.target;
    setdata(() => {
      console.log(name);
      return value;
    });
  };
  const expandlist = (elm) => {
    return [...elm, data];
  };
  return (
    <>
      <input name type="text" value={data} onChange={setdatafn} />
      <button onclick={senddata}></button>
      <Childlist listToParent={expandlist} />
    </>
  );
}
