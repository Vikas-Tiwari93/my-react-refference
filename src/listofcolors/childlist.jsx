import { useEffect, useState } from "react";
export default function Childlist({ listToParent, newdata }) {
  const [list, setlist] = useState(["vikas", "ajit", "deepak"]);
  useEffect(() => {
    setlist(newdata);
  }, [newdata]);
  //
  listToParent(list);
  return (
    <>
      <div>
        <ul>
          {list.map((elm, i) => {
            return (
              <li key={i} style={{ color: elm }}>
                {elm}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
