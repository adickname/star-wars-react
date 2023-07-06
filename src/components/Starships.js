import React, { useContext } from 'react'
import { numberContext } from '../App'
import GetDataAPI from './DataAPICategory'

const Starships = () => {
    const [numberState, setNumberState] = useContext(numberContext)
    return (
        <GetDataAPI
            link={`https://swapi.dev/api/starships/?page=${numberState}`}
            category={'starships'}
        />
    )
}

export default Starships
