import React, { useState } from 'react'
import GetDataAPI from '../API/DataAPICategory'
import ButtonsToNext from '../ButtonsToNext'

const People = () => {
    const [numberState, setNumberState] = useState(1)

    return (
        <>
            <GetDataAPI
                link={`https://swapi.dev/api/people/?page=${numberState}`}
                category={'people'}
            />
            <ButtonsToNext buttons={6} setNumberState={setNumberState} />
        </>
    )
}

export default People
