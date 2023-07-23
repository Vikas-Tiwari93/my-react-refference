import { useContext } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import store from "./Contextapi";

export default function Home() {
  const { togglebtn } = useContext(store);
  return (
    <>
      <Wrapper>
        <div
          style={{
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            gap: "20px",
          }}
        >
          {" "}
          <div>
            <Link to="/">Home</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h1>Home</h1>
          <h2>welcome to home user</h2>
        </div>
        <button onClick={togglebtn}>logOut please</button>
      </Wrapper>
    </>
  );
}
