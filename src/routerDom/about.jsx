import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      {" "}
      <div style={{ backgroundColor: "grey", color: "white" }}>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/contact">
          <span>Contacts </span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
      <div>About</div>
    </>
  );
}
