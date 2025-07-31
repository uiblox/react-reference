import { useState } from "react"
import { useCallback } from "react"
import { FilterInput } from "../../components/FilterInput"
import { use } from "react"

function getNames() {
    return ["tom", "jerry", "donald", "micky mouse", "tommy boy", "minnie mouse"]
}

export const UseCallBackDemo = () => {
    const [myNames, setMyNames] = useState(getNames)
    
    const handleSearch = useCallback((e) => {
        const allNames = getNames()
        const val = e.target.value
        const filtered = allNames.filter((name) => {
            return name.includes(val)
        })
        setMyNames([...filtered])
    }, [])

    

    const handleShuffle = () => {
        
        let temp;
        const currentNames = [...myNames]
        for (let i=0; i <currentNames.length; i++) {
            if (currentNames[i+1]) {
                temp = currentNames[i]
                currentNames[i] = currentNames[i+1]
                currentNames[i+1] = temp;
            }
        }
        setMyNames([...currentNames])
    }

    return (
        <div>
            <button onClick={handleShuffle}>Shuffle</button>
            <FilterInput filterNames={handleSearch} />
            
            {myNames.map((name) => {
                return <div key={name}>{name}</div>
            })}
        </div>
    )
}