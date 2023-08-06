import React, { useRef, useState } from "react";

export default function Otp() {
  const Reff = useRef([]);
  const [input, setinput] = useState([
    { name: 1, value: "" },
    { name: 2, value: "" },
    { name: 3, value: "" },
    { name: 4, value: "" },
  ]);

  const changefn = (id) => {
    console.log("ref", Reff.current[id]);
    if (Reff.current[id].value.length === 1 && id <= input.length - 2) {
      Reff.current[id + 1].focus();
    } else if (Reff.current[id].value.length === 0 && id > 0) {
      Reff.current[id - 1].focus();
    }
  };

  return (
    <div>
      {input.map((elm, i) => {
        return (
          <input
            maxLength={1}
            name={elm.name}
            key={elm.name}
            ref={(el) => {
              return (Reff.current[i] = el);
            }}
            type="text"
            onChange={() => changefn(i)}
          />
        );
      })}
    </div>
  );
}
