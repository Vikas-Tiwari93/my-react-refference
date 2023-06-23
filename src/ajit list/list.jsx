const CartItem = ({ data, incrementQuantity }) => {
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <li>
                <span>{item.name}</span> <span>{item.price}</span>
                <br />
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>
                  Increse quantity
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItem;
