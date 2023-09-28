import React, { useState } from 'react'
import GetDataAPI from '../API/DataAPICategory'
import ButtonsToNext from '../ButtonsToNext'

const Planets = () => {
    const [numberState, setNumberState] = useState(1)

    return (
        <>
            <GetDataAPI
                link={`https://swapi.dev/api/planets/?page=${numberState}`}
                category={'planets'}
            />
            <ButtonsToNext buttons={6} setNumberState={setNumberState} />
        </>
    )
}

export default Planets
