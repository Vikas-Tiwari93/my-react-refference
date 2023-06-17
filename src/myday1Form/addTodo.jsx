import { useState } from "react";

export default function AddTodo({ newadd }) {
  const [data, setdata] = useState({ title: "", detail: "" });
  const setdatafn = (e) => {
    let { name, value } = e.target;
    setdata((lastdata) => {
      return { ...lastdata, [name]: value };
    });
  };
  const submitfn = (e) => {
    console.log("clicked");
    e.preventDefault();

    let data = { title: e.target.title.value, detail: e.target.detail.value };
    console.log(data)
    newadd(data);
    e.target.reset();
  };

  return (
    <>
      <form action="" onSubmit={submitfn}>
        <div>
          <label htmlFor="">Title</label>
          <input
            name="title"
            type="text"
            value={data.title}
            onChange={setdatafn}
          />
        </div>
        <div>
          <label htmlFor="">Details</label>
          <input
            name="detail"
            type="text"
            value={data.detail}
            onChange={setdatafn}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
