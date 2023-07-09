import { useState, useEffect } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addprice, cartlistget, reduceprice } from "./reduxsetup/cartslice";

export default function Card({ info, from }) {
  const [clicked, setclicked] = useState(true);
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cartSlice.added;
  });
  // for post and deleyte method:

  let cartlistdelete = async (productId) => {
    try {
      let postdata = await fetch(`http://localhost:3000/cart/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let jsondata = await postdata.ok;
      console.log(jsondata);
    } catch (err) {
      console.log(err);
    }
  };
  let cartlistpost = async (id) => {
    try {
      let postdata = await fetch("http://localhost:3000/cart", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id }),
      });
      let jsondata = await postdata.ok;
      console.log(jsondata);
    } catch (err) {
      console.log(err);
    }
  };

  //
  // for adding click
  const onclickfnadd = () => {
    setadded(1);
    setclicked(!clicked);

    // only one elm added
    let init = cart.filter((elm) => {
      if (elm.id === info.id) {
        return elm;
      }
    });
    if (init.length === 0) {
      cartlistpost(+info.id);
      dispatch(addprice(info.price));
    }
  };
  // for deleting click
  const onclickfndel = () => {
    setclicked(!clicked);
    dispatch(reduceprice(info.price));
    cartlistdelete(+info.id);
  };

  const [isadded, setadded] = useState(0);
  useEffect(() => {
    dispatch(cartlistget());
  }, [clicked]);
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
          <button onClick={onclickfndel}>Delete product</button>
        ) : (
          <button onClick={onclickfnadd}>
            {isadded ? "added in the cart" : "add to cart"}
          </button>
        )}
      </div>
    </div>
  );
}
