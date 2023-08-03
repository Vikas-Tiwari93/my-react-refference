import { useReducer, useEffect } from "react";
import { changeReducer, initialState } from "./debugging";

const FormComponent = () => {
  // Initialize state as an object with properties for firstName, lastName, and email

  const [inputFeilds, setinputFeilds] = useReducer(changeReducer, initialState);

  // Handler for updating form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputFeilds({ type: "change", field: name, value: value });

    // const newarr = [...inputFeilds];
    // const { name, value } = e.target;
    // for (let i = 0; i < inputFeilds.length; i++) {
    //   if (newarr[i].name === name) {
    //     newarr[i].value = value;
    //   }
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(inputFeilds));
  }, [inputFeilds]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API or processing it.
    console.log("Form data submitted:", inputFeilds);
  };

  console.log("rerender");
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
