import { useState } from 'react';

export const AddCards = ({ onAdd }) => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }   

    const handleInputSubmit = () => {
        onAdd(inputText)
        setInputText("")
    }

    return (
        <>
            <input type="text" onChange={handleInputChange} placeholder="Add card" value={inputText} />
            <button onClick={handleInputSubmit}>Add Card</button>
        </>
    )
}