// import Calling from "./API/calling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Addtocart from "./add to cart with backend/Addtocart";
import Cart from "./add to cart with backend/cart";
import ParentHoc from "./higher order components/ParentHoc";
import Grandparent from "./higher order components/Grandparent";
import Router from "./routerDom/Router";
import Formdynamic from "./dynamicForm/Form";

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
      {/* ...........this is for add to card prog................  */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addtocart />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* ...........this is for add to card prog................  */}
      {/* <Grandparent /> */}
      {/* <Router /> */}
      <Formdynamic />
    </>
  );
}

export default App;
