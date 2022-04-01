import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
  
  
    const increment = () => {
      setCount(count + 1);
    }


    return (
        <div>
            <div>{count}</div>
      <input onChange={event => setValue(event.target.value)} type="text" placeholder="Введите текст" value={value}/>
      <button onClick={increment}>+</button>
        </div>
    );

}

export default Counter;