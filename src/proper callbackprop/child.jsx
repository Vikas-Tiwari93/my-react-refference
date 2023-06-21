const ChildCompSample = ({ onMyIncrement }) => {
  console.log("Props: ", onMyIncrement);
  return (
    <>
      <p>I am from child</p>
      <button onClick={onMyIncrement}>Increment From child</button>
    </>
  );
};

export default ChildCompSample;
