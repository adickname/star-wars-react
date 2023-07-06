import React, { useContext } from 'react'
import DataAPICategory from './DataAPICategory'

import { numberContext } from '../App'
const Planets = () => {
    const [numberState, setNumberState] = useContext(numberContext)

    return (
        <>
            <DataAPICategory
                link={`https://swapi.dev/api/planets/?page=${numberState}`}
                category={'planets'}
            />
        </>
    )
}

export default Planets
