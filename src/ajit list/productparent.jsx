import { useState } from "react";
import CartItem from "./list";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const AddDataToCart = () => {
    setCartData((prevData) => {
      return [...prevData, { ...data, id: new Date().getTime() }];
    });

    setData({
      name: "",
      price: "",
      quantity: 0,
    });
  };
  const increment = (id) => {
    setCartData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          item.quantity = Number(item.quantity) + 1;
        }
        return item;
      });
    });
  };
  return (
    <div>
      <label>
        Product Name:
        <input
          type="text"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
      </label>
      <br />
      <label>
        Product Price:
        <input
          type="number"
          value={data.price}
          onChange={handleInputChange}
          name="price"
        />
      </label>
      <br />
      <label>
        Product Quantity:
        <input
          type="number"
          name="quantity"
          value={data.quantity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={AddDataToCart}>Add to Cart</button>
      <CartItem data={cartData} incrementQuantity={increment} />
    </div>
  );
};

export default Cart;
