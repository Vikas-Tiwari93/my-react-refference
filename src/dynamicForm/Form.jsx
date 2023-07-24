import { useState } from "react";
import "./form.css";

import Child from "./child";

export default function Formdynamic() {
  const [select, setselect] = useState({
    select: "",
    placeholder: "",
    defaultvalue: "",
    label: "",
  });
  const [data, setdata] = useState([]);

  const submitfn = (e) => {
    e.preventDefault();
    let newarr = [...data];
    newarr.push(select);
    setdata(newarr);
  };

  const changeselect = (e) => {
    const { name, value } = e.target;
    if (name === "select") {
      setselect({ ...select, select: value });
    } else if (name === "placeholder") {
      setselect({ ...select, placeholder: value });
    } else if (name === "defaultvalue") {
      setselect({ ...select, defaultvalue: value });
    } else if (name === "label") {
      setselect({ ...select, label: value });
    }
  };
  console.log(data);
  return (
    <div>
      <div className="head">
        <form
          action=""
          onSubmit={(e) => {
            submitfn(e);
          }}
        >
          <span>
            <label htmlFor="">Dropdown Type</label>
            <select
              name="select"
              id=""
              value={select.select}
              onChange={(e) => {
                changeselect(e);
              }}
            >
              <option value="text">text</option>
              <option value="password">password</option>
              <option value="text area">text area</option>
              <option value="email">email</option>
              <option value="number">number</option>
            </select>
          </span>
          <input
            name="placeholder"
            type="text"
            placeholder="placeholder"
            value={select.placeholder}
            onChange={(e) => {
              changeselect(e);
            }}
          />
          <input
            name="defaultvalue"
            type="text"
            value={select.defaultvalue}
            placeholder="default value"
            onChange={(e) => {
              changeselect(e);
            }}
          />
          <input
            name="label"
            type="text"
            value={select.label}
            placeholder="label"
            onChange={(e) => {
              changeselect(e);
            }}
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {data.map((elm, index) => {
          return <Child key={index} item={elm} />;
        })}
      </div>
    </div>
  );
}
