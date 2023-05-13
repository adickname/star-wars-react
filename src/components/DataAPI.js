import React, { useState, useEffect } from 'react'
import axios from 'axios'

import HeaderDetailsCategoryElementStyled from './styles/HeaderDetailsCategoryElement'
import DetailsCategoryElement from './DetailsCategoryElement'
const GetDataAPI = ({ category, onSubPage }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [categoryData, setCategoryData] = useState([])
    const [showDetailsElement, setShowDetailElement] = useState(false)
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
    if (onSubPage) {
    } else {
        return (
            <section>
                {isDownloading && <p>Loading data</p>}
                <article>
                    {categoryData.map((data) => (
                        <>
                            <>
                                <HeaderDetailsCategoryElementStyled
                                    onClick={(e) =>
                                        setShowDetailElement(
                                            !showDetailsElement
                                        )
                                    }
                                >
                                    {(category === 'planets' ||
                                        category === 'people' ||
                                        category === 'starships') &&
                                        data.name}
                                    {category === 'films' && data.title}
                                </HeaderDetailsCategoryElementStyled>

                                {showDetailsElement && (
                                    <DetailsCategoryElement
                                        category={category}
                                        data={data}
                                    ></DetailsCategoryElement>
                                )}
                            </>
                        </>
                    ))}
                </article>
            </section>
        )
    }
}

export default GetDataAPI
