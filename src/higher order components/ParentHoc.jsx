import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Signup from "./Signup";

export default function ParentHoc() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
