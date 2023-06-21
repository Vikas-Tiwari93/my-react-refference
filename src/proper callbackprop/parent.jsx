import { useState } from "react";
import ChildCompSample from "./child";

const ParentCompSample = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    console.log("On Clicked");
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment from parent</button>
      <ChildCompSample onMyIncrement={onIncrement} />
    </>
  );
};

export default ParentCompSample;
