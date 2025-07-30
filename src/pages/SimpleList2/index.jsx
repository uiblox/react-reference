import { useState } from "react"

const SimpleList2 = () => {
    const [items, setItems] = useState([])

    const handleAnimalButtonClick = () => {
        const animalArray = ["cow", "horse", "turtle"]
        const randomNum = Math.floor(Math.random() * animalArray.length)


        const updatedArray = [...items, {id: (Math.floor(Math.random() * 100)+animalArray[randomNum]), type: animalArray[randomNum], likes: 0}]
        setItems(updatedArray)
    }

    const handleAnimalClick = (e) => {
        const target = e.target.getAttribute("data-animal-id")
        const newArr = items.map((itm) => (
            itm.id === target ? {...itm, likes: itm.likes + 1} : itm
        ))
        setItems(newArr)
    }

    return (
        <div>
            <button onClick={handleAnimalButtonClick}>Add Animal</button>
            <div>
                {!items.length ? "Nothing to see here" : items.map((itm) => <div key={itm.id} data-animal-id={itm.id} onClick={handleAnimalClick}>{itm.type} <span>{itm.likes}</span></div>)}
            </div>
        </div>
    )
}

export default SimpleList2;