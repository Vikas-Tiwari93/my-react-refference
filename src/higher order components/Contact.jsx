import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
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
        <h1>wrapperContact</h1> <h3>welcome to contact</h3>
      </Wrapper>
    </div>
  );
}
