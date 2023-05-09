import React, { useState, useEffect } from 'react'
import axios from 'axios'
const GetDataAPI = ({ category }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${category}/`)
            .then(({ data }) => {
                const res = data.results
                setCategoryData(res)
                console.log(res)
                console.log(data)
                setIsDownloading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {isDownloading && <p>Loading data</p>}

            {categoryData.map((data) => (
                <div>
                    <a>{data.name}</a>
                </div>
            ))}
        </div>
    )
}

export default GetDataAPI
