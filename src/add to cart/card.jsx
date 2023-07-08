import { useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addcart, addprice, removecart } from "./reduxsetup/cartslice";

export default function Card({ info, from }) {
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cartSlice.added;
  });

  const [isadded, setadded] = useState(0);
  return (
    <div className="productcard">
      <div className="cardimg">
        <img
          src={info.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="carddetail">{info.title}</div>
      <div className="addtocart">
        {!from ? (
          <button
            onClick={() => {
              dispatch(removecart(info));
            }}
          >
            Delete product
          </button>
        ) : (
          <button
            onClick={() => {
              setadded(1);

              // only one elm added
              let init = cart.filter((elm) => {
                if (elm.id === info.id) {
                  return elm;
                }
              });
              if (init.length === 0) {
                dispatch(addcart(info));
                dispatch(addprice(info.price));
              }
              console.log(init);
              console.log(cart);
            }}
          >
            {isadded ? "added in the cart" : "add to cart"}
          </button>
        )}
      </div>
    </div>
  );
}
