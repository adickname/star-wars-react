import React, { useContext } from 'react'
import GetDataAPI from './DataAPICategory'
import { numberContext } from '../App'
const People = () => {
    const [numberState, setNumberState] = useContext(numberContext)
    return (
        <GetDataAPI
            link={`https://swapi.dev/api/people/?page=${numberState}`}
            category={'people'}
        />
    )
}

export default People
