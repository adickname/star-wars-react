import React, { useState, useEffect } from 'react'
import axios from 'axios'

import HeaderDetailsCategoryElementStyled from './components/styles/HeaderDetailsCategoryElement'
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
        <section>
            {isDownloading && <p>Loading data</p>}
            <article>
                {categoryData.map((data) => (
                    <HeaderDetailsCategoryElementStyled
                        onClick={() => console.log(`klimat ${data.climate}`)}
                    >
                        {data.name}
                    </HeaderDetailsCategoryElementStyled>
                ))}
            </article>
        </section>
    )
}

export default GetDataAPI
