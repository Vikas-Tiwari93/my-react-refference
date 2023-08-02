import React, { useEffect, useState } from "react";

const FormComponent = () => {
  // Initialize state as an object with properties for firstName, lastName, and email

  const [inputFeilds, setinputFeilds] = useState([
    { name: "firstName", value: "", type: "text" },
    { name: "lastName", value: "", type: "text" },
    { name: "email", value: "", type: "text" },
  ]);

  // Handler for updating form fields
  const handleChange = (e) => {
    const newarr = [...inputFeilds];
    const { name, value } = e.target;
    for (let i = 0; i < inputFeilds.length; i++) {
      if (newarr[i].name === name) {
        newarr[i].value = value;
      }
    }
    setinputFeilds(newarr);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API or processing it.
    console.log("Form data submitted:", inputFeilds);
  };

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("formData"));
    setinputFeilds(oldData);
  }, []);
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(inputFeilds));
  }, [inputFeilds]);

  return (
    <form onSubmit={handleSubmit}>
      {inputFeilds.map((elm) => {
        return (
          <div key={elm.name}>
            <label htmlFor={elm.name}>{elm.name}:</label>
            <input
              type={elm.type}
              id={elm.name}
              name={elm.name}
              value={elm.value}
              onChange={handleChange}
            />
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
