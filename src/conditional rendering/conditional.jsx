import { useState } from "react";

export default function Conditional() {
  const [data, setdata] = useState("");

  const inputfn = (e) => {
    setdata(() => {
      return e.target.value;
    });
  };
  return (
    <>
      <input type="text" value={data} onChange={inputfn} />
      {data ? <div>not empty: {data}</div> : <div>this is empty</div>}
    </>
  );
}
