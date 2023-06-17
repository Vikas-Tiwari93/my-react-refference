import { useState } from "react";
import ChildComp from "./ChildComp";
const ParentComp = () => {
  const [count, setCount] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <ChildComp count={count} />
    </>
  );
};

export default ParentComp;





import { useEffect, useMemo, useState } from "react";

const ChildComp = ({ count }) => {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    console.log("Called");
    const parsedNum = Number(count);

    if (isNaN(parsedNum)) {
      return;
    }

    const fields = [];

    for (let i = 0; i < parsedNum; i++) {
      fields.push({ name: `${i}`, value: "" });
    }
    setInputs(fields);
  }, [count]);

  const onInputChange = (e) => {
    //console.log("E: ", e);
    const { name, value } = e.target;
    //console.log({ name, value });
    setInputs((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) {
          item.value = value;
        }
        return item;
      });
    });
  };

  const sum = useMemo(() => {
    const result = inputs.reduce((acc, item) => acc + Number(item.value), 0);
    return result;
  }, [inputs]);

  console.log("Input: ", inputs);

  return (
    <>
      <div>
        <p>Sum {sum}</p>
      </div>
      <div>
        <h1>My Fields</h1>

        {inputs.map((item) => {
          return (
            <div key={item.name}>
              <input
                type="text"
                name={item.name}
                value={item.value}
                onChange={onInputChange}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChildComp;
