import React, { useState, useEffect } from 'react'
import axios from 'axios'
const GetDataAPI = ({ category }) => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${category}/`)
            .then(({ data }) => {
                const res = data.results
                setCategoryData(res)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {categoryData.map((data) => (
                <div>{data.name}</div>
            ))}
        </div>
    )
}

export default GetDataAPI
