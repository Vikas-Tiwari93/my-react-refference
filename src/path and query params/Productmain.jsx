import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Productmain() {
  const [data, setdata] = useState([]);
  const [loneoutput, setloneoutput] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSearchparams, setactiveSearchparams] = useState({});
  const location = useLocation();

  // Function to update query parameters
  const updateQueryParam = (activeSearchparams) => {
    // Update the query parameter in the searchParams object
    for (const key in activeSearchparams) {
      console.log("activeparams", activeSearchparams);
      searchParams.forEach((value, keyin) => {
        if (!activeSearchparams[keyin]) {
          searchParams.delete(keyin);
        }
      });

      searchParams.set(key, activeSearchparams[key]);
    }

    // Update the URL without reloading the page
    setSearchParams(searchParams);
    //for clearing
    // const removeAllOlderQueryParams = (newParams) => {
    //   const newSearchParams = new URLSearchParams();

    //   // Set the new query parameters in the newSearchParams object
    //   Object.entries(newParams).forEach(([key, value]) => {
    //     newSearchParams.set(key, value);
    //   });

    //   // Update the URL without reloading the page
    //   setSearchParams(newSearchParams);
    // };
  };

  const [input, setinput] = useState([
    { label: "laptops", ischecked: false, value: "laptops", products: [] },
    {
      label: "womens-jewellery",
      ischecked: false,
      value: "womens-jewellery",
      products: [],
    },
    { label: "groceries", ischecked: false, value: "groceries", products: [] },
    {
      label: "fragrances",
      ischecked: false,
      value: "fragrances",
      products: [],
    },
    {
      label: "automotive",
      ischecked: false,
      value: "automotive",
      products: [],
    },
  ]);
  const submitfn = (e) => {
    e.preventDefault();
  };

  const inputchange = (e) => {
    let newinput = [...input];

    const { name, value } = e.target;
    for (let i = 0; i < newinput.length; i++) {
      if (newinput[i].label === name) {
        newinput[i].ischecked = !newinput[i].ischecked;

        fetchdatanext(value);
        setinput(newinput);
      }
    }
  };
  console.log("rerender", input);
  let fetchdatanext = async (value) => {
    let data = await fetch(`https://dummyjson.com/products/category/${value}`);
    let jsondata = await data.json();
    console.log(jsondata);
    setloneoutput(jsondata.products);
  };

  let fetchdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let jsondata = await data.json();
    console.log(jsondata);
    setdata(jsondata.products);
  };
  useEffect(() => {
    fetchdata();
    let querryarr = [];
    let paramsobj = {};
    let loadQuery = location.search;
    let newloadQuery = loadQuery.substring(1, loadQuery.length);
    let arr = newloadQuery.split("&");
    for (let i = 0; i < arr.length; i++) {
      paramsobj[arr[i].split("=")[0]] = arr[i].split("=")[1];
      let Qryvalue = arr[i].split("=")[1];
      querryarr.push(Qryvalue);
      let newinput = [...input];
      for (let j = 0; j < newinput.length; j++) {
        if (newinput[j].label === Qryvalue) {
          newinput[j].ischecked = !newinput[j].ischecked;
          fetchdatanext(Qryvalue);
        }
      }
      setinput(newinput);
      setactiveSearchparams(paramsobj);
    }

    console.log(querryarr);
  }, []);

  useEffect(() => {
    let newinput = [...input];
    let paramsobj = { ...activeSearchparams };

    for (let i = 0; i < newinput.length; i++) {
      if (newinput[i].ischecked === true && newinput[i].products.length === 0) {
        paramsobj[i] = input[i].label;

        newinput[i].products = loneoutput;
      } else if (!newinput[i].ischecked) {
        newinput[i].products = [];
        delete paramsobj[i];
        // delete paramsobj[i];
      }
      console.log("ihere", paramsobj);

      setactiveSearchparams(paramsobj);
      setinput(newinput);
    }
  }, [loneoutput]);

  useEffect(() => {
    // Example usage: updating 'param2' to 'newvalue'

    let newlist = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].ischecked === true) {
        newlist = [...newlist, ...input[i].products];
        updateQueryParam(activeSearchparams);
      }
    }
    setdata(newlist);
  }, [input]);
  return (
    <div>
      {data.length === 0 ? (
        <div>still loading</div>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <form action="" onSubmit={(e) => submitfn(e)}>
              {input.map((elm) => {
                return (
                  <span key={elm.label}>
                    <input
                      key={elm.label}
                      name={elm.label}
                      type="checkbox"
                      value={elm.value}
                      checked={elm.ischecked}
                      onChange={(e) => inputchange(e)}
                    />
                    <label htmlFor="">{elm.label}</label>
                  </span>
                );
              })}

              <input type="text" />
              <input type="submit" />
            </form>
          </div>
          {data.map((elm) => {
            return (
              <Link
                key={elm.id}
                to={`/product/${elm.id}?productId=${elm.id}&title=${elm.title}`}
              >
                <div
                  style={{
                    padding: 12,
                    width: "200px",
                    overflow: "hidden",
                    border: "1px solid black",
                  }}
                >
                  <div>{elm.title}</div>
                  <div>Price:{elm.price}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
