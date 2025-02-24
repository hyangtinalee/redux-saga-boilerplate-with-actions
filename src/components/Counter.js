import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    const toggleStatus = useSelector((state) =>
        state.toggle.isToggled.toString()
    );
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: "INCREMENT" });
    const decrement = () => dispatch({ type: "DECREMENT" });
    const toggle = () => dispatch({ type: "TOGGLE" });

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>{toggleStatus}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}
