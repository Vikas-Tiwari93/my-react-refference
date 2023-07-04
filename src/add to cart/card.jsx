import { useState } from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { addcart, addprice } from "./reduxsetup/cartslice";
export default function Card({ info }) {
  let dispatch = useDispatch();

  const [isadded, setadded] = useState(false);
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
        <button
          onClick={() => {
            setadded(!isadded);
            dispatch(addcart(info));
            dispatch(addprice(info.price));
          }}
        >
          {isadded ? "added in the cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
}
