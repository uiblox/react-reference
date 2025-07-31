import { useEffect } from "react"
import { useState } from "react"
import classes from "./styles.module.css"

export const UseEffectDemo1 = () => {
    const [{cordX, cordY}, setCoords] = useState({cordX: 0, cordY: 0})    
    
    const initMouseMove = (e) => {
        setCoords(() => ({
           cordX: e.pageX,
           cordY: e.pageY
        }))
    }

    useEffect(() => {
        window.addEventListener("mousemove", initMouseMove)
        return () => {
            window.removeEventListener("mousemove", initMouseMove)
            console.log("unmounted")
        }
    }, [])

    return (
        <div>
            <h1>useEffect to set eventListeners</h1>
            <ul>
                <li>useEffect fires after the dom is rendered. This is why there is useLayOutEffect</li>
                <li>Here we have a mousemove event event added to the target element.</li>
                <li>When we exit the page, the mouse move event is removed.</li>
                <li>The dependency array makes a shallow comparison of the value inserted. If an obj property is leveraged you must</li>
            </ul>
            <div className={classes.move} style={{ transform: `translate(${cordX}px, ${cordY}px)`}}>Follow Me</div>
        </div>
    )
}