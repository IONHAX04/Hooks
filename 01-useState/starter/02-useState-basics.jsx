import { useState } from "react";

const UseStateBasics = () => {  
    const [count, setCount] = useState(0);

    const handleClick =() => {
      setCount(count + 1);
      console.log(count);
    };


    return(
      <div>
        <h2>{count}</h2>
        <button type="button" className="btn" onClick={handleClick}>Increment count</button>
      </div>
    );
};

export default UseStateBasics;
