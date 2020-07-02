import React from "react"

export function Counter({ counter, increment, decrement }) {

    return (<>

        <h1>Hello Counter : {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}> Decremnent</button>

    </>)


}