import { useEffect, useState } from "react";
import Httpinstance from "./axioscreate";

export default function Calling() {
  const [data, setdata] = useState([]);

  // by axios create
  let getapidata = async () => {
    try {
      const res = await Httpinstance.get("/");
      setdata(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((data) => {
    //     return data.json(); //return is important
    //   })
    //   .then((json) => {
    //     console.log(json, "this is me");
    //     setdata(json);
    //   });
    // axios;
    // axios.get("https://jsonplaceholder.typicode.com/todos/").then((data) => {
    //   console.log("i am here", data);
    //   setdata(data.data);
    // });

    //axios instance

    getapidata();
  }, []);
  console.log(data);
  return (
    <div>
      {data.slice(0, 20).map((elm) => {
        return <div key={elm.id}>{elm.title}</div>;
      })}
    </div>
  );
}
