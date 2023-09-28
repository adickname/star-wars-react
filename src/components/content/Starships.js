import React, { useState } from 'react'
//import { NumberContext } from '../../App'
import GetDataAPI from '../API/DataAPICategory'
import ButtonsToNext from '../ButtonsToNext'

const Starships = () => {
    const [numberState, setNumberState] = useState(1)
    return (
        <>
            <GetDataAPI
                link={`https://swapi.dev/api/starships/?page=${numberState}`}
                category={'starships'}
            />
            <ButtonsToNext buttons={4} setNumberState={setNumberState} />
        </>
    )
}

export default Starships
