// import Calling from "./API/calling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Addtocart from "./add to cart/Addtocart";
import Cart from "./add to cart/cart";
// import Conditional from "./conditional rendering/conditional";
// import Parentapi from "./calling api properway/parentapi";

// import ParentCompSample from "./proper callbackprop/parent.jsx";

function App() {
  return (
    <>
      {/* <ParentCompSample /> */}
      {/* <Parentinput /> */}
      {/* <Conditional /> */}
      {/* <Calling /> */}
      {/* <Parentapi /> */}
      {/* <ShowHideFifth /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addtocart />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
