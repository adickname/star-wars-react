import React, { useState, useEffect } from 'react'
import axios from 'axios'
const DataAPIFromLinksDetails = ({ link, category, elements }) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [homeworld, setHomeworld] = useState([])
    const [films, setFilms] = useState([])
    const [residents, setResidents] = useState([])
    const [planets, setPlanets] = useState([])
    const [species, setSpecies] = useState([])
    const [starships, setStarships] = useState([])
    const [characters, setCharacters] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [pilots, setPilots] = useState([])
    const links = Object.values(link)

    useEffect(() => {
        links.forEach((e) => {
            axios
                .get(e)
                .then(({ data }) => {
                    if (category === 'planets') {
                        if (elements === 'residents') {
                            setResidents((oldArray) => [...oldArray, data])
                        } else if (elements === 'films') {
                            setFilms((oldArray) => [...oldArray, data])
                        }
                    } else if (category === 'people') {
                        setHomeworld(data)
                    } else if (category === 'films') {
                        if (elements === 'planets') {
                            setPlanets((oldArray) => [...oldArray, data])
                        } else if (elements === 'species') {
                            setSpecies((oldArray) => [...oldArray, data])
                        } else if (elements === 'starships') {
                            setStarships((oldArray) => [...oldArray, data])
                        } else if (elements === 'characters') {
                            setCharacters((oldArray) => [...oldArray, data])
                        } else if (elements === 'vehicles') {
                            setVehicles((oldArray) => [...oldArray, data])
                        }
                    } else if (category === 'starships') {
                        if (elements === 'pilots') {
                            setPilots((oldArray) => [...oldArray, data])
                        } else if (elements === 'films') {
                            setFilms((oldArray) => [...oldArray, data])
                        }
                    }
                })
                .catch((err) => console.log(err))
        })
        setIsDownloading(false)
    }, [])

    return (
        <>
            <p>{isDownloading && <>Loading data</>}</p>
            {!isDownloading &&
                category === 'people' &&
                elements === 'homeworld' && (
                    <p>
                        homeworld : <>{homeworld.name}</>
                    </p>
                )}
            {!isDownloading &&
                category === 'planets' &&
                ((elements === 'residents' && (
                    <p>
                        residents :
                        <>
                            {residents.map(({ name }) => (
                                <p>{name}</p>
                            ))}
                        </>
                    </p>
                )) ||
                    (elements === 'films' && (
                        <p>
                            films :
                            <p>
                                {films.map(({ title }) => (
                                    <p>{title}</p>
                                ))}
                            </p>
                        </p>
                    )))}

            {(!isDownloading &&
                category === 'films' &&
                elements === 'species' && (
                    <p>
                        species :
                        <p>
                            {species.map(({ name }) => (
                                <p>{name}</p>
                            ))}
                        </p>
                    </p>
                )) ||
                (elements === 'planets' && (
                    <p>
                        planets :
                        <>
                            {planets.map((item) => (
                                <p>{item.name}</p>
                            ))}
                        </>
                    </p>
                )) ||
                (elements === 'starships' && (
                    <p>
                        starships :
                        <>
                            {starships.map((item) => (
                                <p>{item.name}</p>
                            ))}
                        </>
                    </p>
                )) ||
                (elements === 'characters' && (
                    <p>
                        characters :
                        <>
                            {characters.map((item) => (
                                <p>{item.name}</p>
                            ))}
                        </>
                    </p>
                )) ||
                (elements === 'vehicles' && (
                    <p>
                        vehicles :
                        <>
                            {vehicles.map((item) => (
                                <p>{item.name}</p>
                            ))}
                        </>
                    </p>
                ))}
            {!isDownloading &&
                category === 'starships' &&
                ((elements === 'films' && (
                    <p>
                        films :
                        <p>
                            {films.length > 0 ? (
                                films.map(({ title }) => <p>{title}</p>)
                            ) : (
                                <p>This element has no films</p>
                            )}
                        </p>
                    </p>
                )) ||
                    (elements === 'pilots' && (
                        <p>
                            pilots :
                            <p>
                                {pilots.length > 0 ? (
                                    pilots.map(({ name }) => <p>{name}</p>)
                                ) : (
                                    <p>This element has no pilots</p>
                                )}
                            </p>
                        </p>
                    )))}
        </>
    )
}

export default DataAPIFromLinksDetails
