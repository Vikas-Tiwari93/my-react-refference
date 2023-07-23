// import Signup from "./Signup";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import store from "./Contextapi";

export default function Wrapper({ children }) {
  const { cookies } = useContext(store);
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  // const getcookie = (cookieName) => {
  //   let cookies = document.cookie.split(";");

  //   for (var i = 0; i < cookies.length; i++) {
  //     var cookie = cookies[i].trim();
  //     if (cookie.indexOf(cookieName + "=") === 0) {
  //       return Number(cookie.substring(cookieName.length + 1, cookie.length));
  //     }
  //   }
  // };

  // useEffect(() => {
  //   setcookies(getcookie("getin"));
  // }, []);
  return (
    <div>
      {!cookies ? (
        pathname !== "/signin" ? (
          <Navigate to="/signin" />
        ) : (
          children
        )
      ) : pathname === "/signin" ? (
        <Navigate to="/" />
      ) : (
        children
      )}
    </div>
  );
}
