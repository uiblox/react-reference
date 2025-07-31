import { useEffect, useRef } from 'react';

export const UseRefDemo1 = () => {
    
    const handleBtnClick = () => {
        target.current.focus();
    }

    const target = useRef()

    useEffect(() => {
        console.log("This is the target element", target.current)
    },[])
    
    return (
        <div>
            <h1>Use Ref</h1>
            <button onClick={handleBtnClick}>Focus input</button>
            <ul>
                <li>useRef can be used to find element</li>
                <li>useRef can be used to store boolean values</li>
                <li>useRef value can be updated without causing a re-render</li>
            </ul>
            <input ref={target} type="text" placeholder="will focus on btn click" />
        </div>
    )
}