// import React from 'react';
// import {useState} from 'react';

import React, {useState} from 'react';

const Counter = () => {
    // const [count, setCount] = React.useState(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount( count + 1)
    }

    const decrement = () => setCount(count - 1)
    return(
        <>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;