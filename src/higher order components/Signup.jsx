import { useContext, useState } from "react";
import Wrapper from "./Wrapper";
import store from "./Contextapi";

export default function Signup() {
  const { togglebtn } = useContext(store);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const post = async (u, p) => {
    let data = await fetch("http://localhost:3000/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u, password: p }),
    });
    console.log(u, p);
    let jsonobj = await data.ok;
    console.log(jsonobj);
  };
  const setuser = (e) => {
    setusername(e.target.value);
  };
  const setpass = (e) => {
    setpassword(e.target.value);
  };
  console.log(username, password);
  return (
    <Wrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60%", margin: "10px" }}>
          <div style={{ margin: "10px" }}>
            <label htmlFor="">username</label>{" "}
            <input type="text" value={username} onChange={setuser} />
          </div>
          <div style={{ margin: "10px" }}>
            <label htmlFor="">password</label>{" "}
            <input type="text" value={password} onChange={setpass} />
          </div>
          <div style={{ margin: "10px" }}>
            {" "}
            <button onClick={togglebtn}>log in</button>{" "}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
