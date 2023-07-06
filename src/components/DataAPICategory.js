import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeaderDetailsCategoryElementStyled from './styles/HeaderDetailsCategoryElement'
import HeaderDetailsElementStyled from './styles/HeaderDetailsCategoryElement'
import DetailsCategoryElement from './DetailsCategoryElement'
import DivStyled from './styles/DivStyled'

const DataAPICategory = ({ link, category }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [categoryData, setCategoryData] = useState([])
    const [selected, setSelected] = useState()
    const toggle = (e, id) => {
        if (e.target) {
            setSelected(id) //selected and id are same it means close the toggle
        }
    }
    useEffect(() => {
        console.log(link)
        console.log(category)
        axios
            .get(`${link}`, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
            .then(({ data }) => {
                const res = data.results
                setCategoryData(res)
                setIsDownloading(false)
            })
            .catch((err) => console.log(err))
    }, [link])

    return (
        <section>
            {isDownloading && <p>Loading data</p>}
            <article>
                {categoryData.map((data, index) => (
                    <>
                        <>
                            <HeaderDetailsCategoryElementStyled>
                                <>
                                    {category === 'planets' && (
                                        <HeaderDetailsElementStyled
                                            onClick={(e) => {
                                                toggle(e, data.url)
                                            }}
                                        >
                                            <DivStyled key={index}>
                                                <h2>{data.name}</h2>
                                            </DivStyled>
                                            {selected === data.url ? (
                                                <DetailsCategoryElement
                                                    category={'planets'}
                                                    data={data}
                                                ></DetailsCategoryElement>
                                            ) : null}
                                        </HeaderDetailsElementStyled>
                                    )}
                                </>
                                <>
                                    {category === 'people' && (
                                        <HeaderDetailsElementStyled
                                            onClick={(e) => {
                                                toggle(e, data.url)
                                            }}
                                        >
                                            <DivStyled key={index}>
                                                <h2>{data.name}</h2>
                                            </DivStyled>
                                            {selected === data.url ? (
                                                <DetailsCategoryElement
                                                    category={'people'}
                                                    data={data}
                                                ></DetailsCategoryElement>
                                            ) : null}
                                        </HeaderDetailsElementStyled>
                                    )}
                                </>
                                <>
                                    {category === 'starships' && (
                                        <HeaderDetailsElementStyled
                                            onClick={(e) => {
                                                toggle(e, data.url)
                                            }}
                                        >
                                            <DivStyled key={index}>
                                                <h2>{data.name}</h2>
                                            </DivStyled>
                                            {selected === data.url ? (
                                                <DetailsCategoryElement
                                                    category={'starships'}
                                                    data={data}
                                                ></DetailsCategoryElement>
                                            ) : null}
                                        </HeaderDetailsElementStyled>
                                    )}
                                </>
                                <>
                                    {category === 'films' && (
                                        <HeaderDetailsElementStyled
                                            onClick={(e) => {
                                                toggle(e, data.url)
                                            }}
                                        >
                                            <DivStyled key={index}>
                                                <h2>{data.title}</h2>
                                            </DivStyled>
                                            {selected === data.url ? (
                                                <DetailsCategoryElement
                                                    category={'films'}
                                                    data={data}
                                                ></DetailsCategoryElement>
                                            ) : null}
                                        </HeaderDetailsElementStyled>
                                    )}
                                </>
                            </HeaderDetailsCategoryElementStyled>
                        </>
                    </>
                ))}
            </article>
        </section>
    )
}

export default DataAPICategory
