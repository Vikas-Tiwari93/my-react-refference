import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootreducer";

let store = configureStore({ reducer });

export default store;
