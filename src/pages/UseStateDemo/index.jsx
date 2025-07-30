
import { useState } from 'react';
import classes from "./styles.module.css";

export const UseStateDemo = () => {

    const [count, setCount] = useState(0)

    const [{count1, count2}, setCount2] = useState({count1: 100, count2: 20})

    const handleCountUpdate = (e) => {
        const updateType = e.target.textContent
        if (updateType === "Increment") {
            setCount((c) => c+1)
        }
        if (updateType === "Decrement") {
            setCount((c) => c-1)
        }
    }

    const handleMultiCount = () => {
        setCount2(c => {
            return {...c, count1: c.count1 + 10}
        })
    }

    return (
        <div className={classes['page-container']}>
            <h1>Use State Tips</h1>
            <ul>
                <li>We can initialize state with an expensive function by creating the function outside of the react component and referencing it within useState(arg) as an argument.</li>
                <li>We can set state by directly passing the new state as an argument to the setState function or we can pass an updater function. The updater function argument will reflect current state.</li>
            </ul>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handleCountUpdate}>Increment</button>
                <button onClick={handleCountUpdate}>Decrement</button>
            </div>
            <div>
                <p>We can also have more complex state. State does not need to be a primitive. It can be an object. Here we have state with 2 properties count1 and count2</p>
                <div>
                    <div>Count1: {count1}</div>
                    <div>Count2: {count2}</div>
                    <button onClick={handleMultiCount}>Add 10</button>
                </div>
            </div>

        </div>
    )
}