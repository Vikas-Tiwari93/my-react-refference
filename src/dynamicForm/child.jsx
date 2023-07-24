import Smallestchild from "./smallestchild";
import { useState } from "react";

export default function Child({ item }) {
  const [print, setprint] = useState([]);
  const [inputdata, setinputdata] = useState({
    value: item.defaultvalue,
    label: item.label,
  });

  const inputdatafn = (e) => {
    const { value } = e.target;

    setinputdata({ ...inputdata, value: value });
  };
  const submitfn = (e) => {
    e.preventDefault();
    let newarr = [...print];
    newarr.push(inputdata);
    setprint(newarr);
  };
  return (
    <div>
      <div className="child">
        <form
          action=""
          onSubmit={(e) => {
            submitfn(e);
          }}
        >
          <div>{item.label}</div>
          <div>
            <input
              type={item.select}
              value={inputdata.value}
              placeholder={item.placeholder}
              onChange={(e) => {
                inputdatafn(e);
              }}
            />
          </div>
          <input type="submit" />
        </form>
        <div>
          {print.map((elm, index) => {
            return <Smallestchild key={index} dataprint={elm} />;
          })}
        </div>
      </div>
    </div>
  );
}
