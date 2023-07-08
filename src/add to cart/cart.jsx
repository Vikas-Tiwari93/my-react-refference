import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./card";

export default function Cart() {
  let cartlist = useSelector((state) => {
    return state.cartSlice.added;
  });
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
