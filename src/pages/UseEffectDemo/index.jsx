

import { useState, useEffect } from "react";
import classes from "./styles.module.css";


function generateRandomNumber () {
    return Math.floor(Math.random() * 100)
}
export const UseEffectDemo = () => {
    const [count, setCount] = useState(generateRandomNumber)

    const [triva, setTriva] = useState("no data")

    const handleCount = () => {
        setCount(generateRandomNumber())
    }

    useEffect(() => {
        const fetchData = async () => {
            const getData = fetch(`http://numbersapi.com/${count}`)
            const result = (await getData).text();
            const data = await result;
            setTriva(data)
        }
        fetchData()
    },[count])

    return (
        <div className={classes['page-container']}>
            <h1>Use Effect</h1>
            <ul>
                <li>Use Effect will render at least one time.</li>
                <li>Use Effect requires a dependency array[]. If left blank it will only run once on initial render. If a state value is passed in the dependency array, useEffect will run again when that value is updated.</li>
                <li>Multiple Use Effects can be run. They fire one after another.</li>
            </ul>
            <div>
                <h2>Triva Number: {count}</h2>
                <p>Click to update trivia fact</p>
                <button onClick={handleCount}>Update</button>
                <div>
                {triva}
                </div>
            </div>
        </div>
    )
}