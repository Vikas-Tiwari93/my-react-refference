export default function ListTodo({ list }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap:"wrap" }}>
      
        {list.map((elm,index) => {
          return (
            <div key={index} style={{width: "200px",border:'1px solid black'}}>
              <li>{elm.title}</li>
              <p>{elm.detail}</p>
            </div>
          );
        })}
     
    </div>
  );
}
