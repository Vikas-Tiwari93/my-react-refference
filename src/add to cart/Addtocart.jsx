import Card from "./card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productData } from "./reduxsetup/productslice.js";
import { useEffect } from "react";

export default function Addtocart() {
  let Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(productData());
  }, []);
  const productlist = useSelector((state) => {
    return state.productslice.products;
  });

  if (productlist.length === 0) {
    return <p>Please wait while we are loading</p>;
  }

  return (
    <>
      <div className="cartbar">
        <Link to="/cart">
          <div
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            cart
          </div>
        </Link>
      </div>
      {productlist.map((elm, index) => {
        return <Card key={index} info={elm} from={"profuctlist"} />;
      })}
    </>
  );
}
