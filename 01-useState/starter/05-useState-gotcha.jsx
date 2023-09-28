import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);

  const Click = () => {
    setTimeout(() => {
      setValue((currentNumber) => {
        console.log(currentNumber);
        return currentNumber+1;
      });
    }, 2000);
  };
  return(
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={Click}>Click here</button>
    </>
  )
};

export default UseStateGotcha;
