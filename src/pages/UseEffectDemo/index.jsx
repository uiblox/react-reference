import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import classes from "./styles.module.css";

function generateRandomNumber () {
    return Math.floor(Math.random() * 100)
}

export const UseEffectDemo = () => {
    const [fact, setFact] = useState(localStorage.getItem("fact") || generateRandomNumber)

    const handleBtnClick = () => {
        const newTriviaNum = generateRandomNumber();
        setFact(newTriviaNum)
    }
    
    const {data, loading,} = useFetch(`http://numbersapi.com/${fact}`);

    useEffect(() => {
        localStorage.setItem("fact", fact)
    },[fact])

    return (
        <div className={classes['page-container']}>
            <p>Generate random number</p>
            <p>New Fact#: {fact}</p>
            <button onClick={handleBtnClick}>Update Triva</button>
            <div>
                {!data ? "Loading...": data}
            </div>
        </div>
    )
}