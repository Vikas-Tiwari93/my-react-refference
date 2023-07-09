import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./cardserver";
import { useEffect } from "react";
import { cartlistget } from "./reduxsetup/cartslice";

export default function Cart() {
  const dispatch = useDispatch();
  let cartlist = useSelector((state) => {
    return state.cartSlice.added;
  });
  useEffect(() => {
    dispatch(cartlistget());
  }, []);
  let amount = useSelector((state) => {
    return state.cartSlice.amount;
  });
  return (
    <div style={{ width: "100%" }}>
      <Link to="/">Go back to products</Link>
      <div style={{ width: "100%" }}>
        {!cartlist ? (
          <p>empty and amount:{amount} </p>
        ) : (
          cartlist.map((elm, index) => {
            return <Card info={elm} key={index} />;
          })
        )}
        <p>and amount:{amount}</p>;
      </div>
    </div>
  );
}
