
import { useState } from 'react';
import { Card } from "./components/card/index"
import { AddCards } from "./components/addCards/index"

function App() {
  const [cards, setCardCount] = useState(["one", "two", "three", "four"])
  const [{fName, lName, userName, id}] = useState({fName: 'unknown', lName: "unknown", userName: "default", id: 0})

  const handleCardDeleteClick = ((arg) => {
    const filteredList = cards.filter(card => card !== arg);
    setCardCount(filteredList)
  })

  const handleAddClick = (newCard) => {
    setCardCount([...cards, newCard])
  }

  return (
    <>
      <div>
        <span>{fName}</span>
        <span>{lName}</span>
        <span>{userName}</span>
        <span>{id}</span>
      </div>
      <AddCards onAdd={handleAddClick}/>
      {cards.map((itm, ) => {
        return <Card key={itm} cardCount={itm} onDelete={handleCardDeleteClick} />
      })}
    </>
  )
}

export default App
