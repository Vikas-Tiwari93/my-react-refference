import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Listproduct() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  // const paramValue = queryParams.get("title");
  // const paramValue1 = queryParams.get("productId");
  // console.log("Param values:-", paramValue, paramValue1);

  const queryParamsObj = {};
  queryParams.forEach((value, key) => {
    queryParamsObj[key] = value;
  });
  console.log("queryParamsObj=", queryParamsObj);

  let fetchdata = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let jsondata = await data.json();
    console.log(jsondata);
    setdata(jsondata);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(id);
  console.log("location", location);
  if (data.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <h1>Listproduct</h1>
      <div>
        <p>title :{data.title}</p>
        <p>price :{data.price}</p>
        <p>desciption :{data.description}</p>
      </div>
    </div>
  );
}
