import axios from "axios";

let Httpinstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
  timeout: 10000,
});
export default Httpinstance;
