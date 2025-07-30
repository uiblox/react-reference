export const Card = ({cardObj, onDelete}) => {
    return (
        <div>
            Card {cardObj.id}
            <img src={cardObj.img} alt="" />
            <button onClick={() => onDelete(cardObj.id)}>delete</button>
        </div>
    )
}