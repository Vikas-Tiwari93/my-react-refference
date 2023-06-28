import Spinner from "./spinner";

export default function List({ data }) {
  if (data === null) {
    return <Spinner />;
  }
  return (
    <div>
      {data.map((elm) => {
        return <div key={elm.id}>{elm.title}</div>;
      })}
    </div>
  );
}
