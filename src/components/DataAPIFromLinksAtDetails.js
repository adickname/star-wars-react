import React, { useState, useEffect } from 'react'
import axios from 'axios'
const GetDataAPIFomLinksAtDetails = ({ link, category, elements }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [homeworld, setHomeworld] = useState([])
    const [films, setFilms] = useState([])
    const [residents, setResidents] = useState([])
    const links = Object.values(link)
    useEffect(() => {
        links.forEach((element) =>
            axios.get(`${element}`).then(({ data }) => {
                const newElement = []
                newElement.push(data)
                if (elements === 'films') {
                    setFilms([newElement])
                    console.log(films)
                }
                if (elements === 'residents') {
                    setResidents(data)
                }
                if (elements === 'homeworld') {
                    setHomeworld(data)
                }

                setIsDownloading(false)
            })
        )
        //fetch(`${link}`).then((data) => console.log(data))
    }, [])

    return (
        <>
            <>{isDownloading && <>Loading data</>}</>

            {!isDownloading && category === 'people' && (
                <p>
                    homeworld : <>{homeworld.name}</>
                </p>
            )}

            {!isDownloading && category === 'planets' && (
                <>
                    <p>
                        residents : <>{residents.name}</>
                    </p>
                    <p>
                        films :
                        {films.map((films) => (
                            <>
                                <p>{films.title}</p>
                                <p>episode: {films.episode_id}</p>
                            </>
                        ))}
                    </p>
                </>
            )}
        </>
    )
}

export default GetDataAPIFomLinksAtDetails
