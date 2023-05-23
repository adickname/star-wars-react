import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeaderDetailsCategoryElementStyled from './styles/HeaderDetailsCategoryElement'
import DetailsCategoryElementStyled from './DetailsCategoryElement'
import HeaderDetailsElementStyled from './styles/HeaderDetail'
import GetDataAPIFomLinksAtDetails from './DataAPIFromLinksAtDetails'
import DetailsCategoryElement from './DetailsCategoryElement'

const GetDataAPI = ({ link, category, onSubPage }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [categoryData, setCategoryData] = useState([])
    const [url, setUrl] = useState()
    const [selected, setSelected] = useState()
    const toggle = (e, id) => {
        if (e.target) {
            setSelected(id) //selected and id are same it means close the toggle
        }
        console.log(e.target)
        console.log(url)
    }
    useEffect(() => {
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
    }, [])
    if (onSubPage) {
        //return categoryData
    } else {
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
                                                <div key={index}>
                                                    {data.name}
                                                </div>
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
                                                <div key={index}>
                                                    {data.name}
                                                </div>
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
                                                <div key={index}>
                                                    {data.name}
                                                </div>
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
                                                <div key={index}>
                                                    {data.title}
                                                </div>
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
}

export default GetDataAPI
