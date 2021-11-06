import React, {
    useState,
    useEffect
} from 'react'

export default function Kanye() {
    //hold kanyes quote in a state
    const [wisdom, setWisdom] = useState('')
    //fetch a quote from the API
    useEffect(() => {
        //hit the API endpoint
        fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(kanyeData => {
            //set state to the quote
            setWisdom(kanyeData.quote)
            console.log(kanyeData.quote)
        })
        .catch(err => console.log(err))
    }, [])

    const handleBestowWisdom = () => {
        fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(kanyeData => {
            //set state to the quote
            setWisdom(kanyeData.quote)
            //console.log(kanyeData.quote)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <button onClick={handleBestowWisdom} >
                bestow upon me some wisdom
            </button>
            <h1>{wisdom}</h1>
            
        </div>
    )
}