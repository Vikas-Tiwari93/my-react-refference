export default function Childlist({ listToParent }) {
  const [list, setlist] = useState(["vikas", "ajit", "deepak"]);
  listToParent(list);
  return (
    <>
      <div>
        <ul>
          {list.map((elm, i) => {
            return <li key={i}>{elm}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
