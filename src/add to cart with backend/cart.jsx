import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./cardserver";
import { useEffect } from "react";
import { cartlistget2 } from "./reduxsetup/cartslice";

export default function Cart() {
  const dispatch = useDispatch();
  let cartlist = useSelector((state) => {
    return state.cartSlice.added;
  });
  useEffect(() => {
    dispatch(cartlistget2());
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
          cartlist.map((elm) => {
            return <Card info={elm} key={elm.id} />;
          })
        )}
        <p>and amount:{amount}</p>;
      </div>
    </div>
  );
}
