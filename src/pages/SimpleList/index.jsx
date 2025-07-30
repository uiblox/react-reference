
import { useState } from 'react';
import { Card } from "../../components/card/index";
import { AddCards } from "../../components/addCards/index"
import alexaImg from "../../assets/alexa.png"
import cortanaImg from "../../assets/cortana.png"
import siriImg from "../../assets/siri.png"

function SimpleList() {
  const [cards, setCardCount] = useState([{id: "one", img: alexaImg}, {id: "two", img: cortanaImg}, {id: "three", img: siriImg}])

  const handleCardDeleteClick = ((arg) => {
    console.log(arg)
    const filteredList = cards.filter(card => card.id !== arg);
    setCardCount(filteredList)
  })

  const handleAddClick = (newCard) => {
    setCardCount([...cards, {id: newCard, img: alexaImg}])
  }
  
  return (
    <div>
      <AddCards onAdd={handleAddClick}/>
        {cards.map((itm, ) => {
          return <Card key={itm.id} cardObj={itm} onDelete={handleCardDeleteClick} />
        })}
    </div>
  )
}


export default SimpleList
