import ParentHoc from "./ParentHoc";
import store from "./Contextapi";
import { useState } from "react";

export default function Grandparent() {
  const [cookies, setcookies] = useState(false);
  const togglebtn = () => {
    setcookies((lastval) => {
      return !lastval;
    });
  };
  return (
    <>
      <store.Provider value={{ cookies, togglebtn }}>
        <ParentHoc />
      </store.Provider>
    </>
  );
}
