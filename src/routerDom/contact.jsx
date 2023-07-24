import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      {" "}
      <div style={{ backgroundColor: "grey", color: " white" }}>
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
      <div>contact</div>
    </>
  );
}
