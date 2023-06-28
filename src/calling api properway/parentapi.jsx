import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import List from "./list";

export default function Parentapi() {
  const [data, setdata] = useState(null);

  let setdatafn = (json) => {
    setdata(json);
  };
  useEffect(() => {
    let apicall = async () => {
      let result = await fetch("https://fakestoreapi.com/products");
      let json = await result.json();
      setdatafn(json);
    };

    apicall();
  }, []);
  return (
    <div>
      <List data={data} />
    </div>
  );
}
