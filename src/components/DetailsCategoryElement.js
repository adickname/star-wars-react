import GetDataAPIFomLinksAtDetails from './DataAPIFromLinksAtDetails'
import DetailsCategoryElementStyled from './styles/DetailsCategoryElementStyled'

const DetailsCategoryElement = ({ category, data }) => {
    if (category === 'planets') {
        const arrayData = Object.values(data)
        const [
            name,
            rotation_period,
            diameter,
            orbitial_period,
            gravity,
            population,
            climate,
            terrain,
            surface_water,
            residents,
            films,
        ] = arrayData

        return (
            <DetailsCategoryElementStyled>
                <p>name: {name}</p>
                <p>rotation period: {rotation_period}</p>
                <p>diameter: {diameter}</p>
                <p>orbitial period: {orbitial_period}</p>
                <p>gravity: {gravity}</p>
                <p>population: {population}</p>
                <p>climate: {climate}</p>
                <p>terrain: {terrain}</p>
                <p>surface water: {surface_water}</p>
                <GetDataAPIFomLinksAtDetails
                    link={residents}
                    category={'planets'}
                    elements={'residents'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={films}
                    category={'planets'}
                    elements={'films'}
                />
            </DetailsCategoryElementStyled>
        )
    } else if (category === 'people') {
        const arrayData = Object.values(data)
        const [
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            homeworld,
        ] = arrayData
        const homeworldLink = [homeworld]

        return (
            <DetailsCategoryElementStyled>
                <p>name: {name}</p>
                <p>gender: {gender}</p>
                <GetDataAPIFomLinksAtDetails
                    link={homeworldLink}
                    category={'people'}
                    elements={'homeworld'}
                />
                <p>mass: {mass}</p>
                <p>height: {height}</p>
                <p>birth year: {birth_year}</p>
                <p>eye color: {eye_color}</p>
                <p>hair color: {hair_color}</p>
                <p>skin color: {skin_color}</p>
            </DetailsCategoryElementStyled>
        )
    } else if (category === 'starships') {
        const arrayData = Object.values(data)
        const [
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            MGLT,
            starships_class,
            pilots,
            films,
        ] = arrayData

        return (
            <DetailsCategoryElementStyled>
                <p>name: {name}</p>
                <p>model: {model}</p>
                <p>manufacturer: {manufacturer}</p>
                <p>cost in credits: {cost_in_credits}</p>
                <p>length: {length}</p>
                <p>max athomosphering speed: {max_atmosphering_speed}</p>
                <p>crew: {crew}</p>
                <p>passengers: {passengers}</p>
                <p>cargo capacity: {cargo_capacity}</p>
                <p>consumables: {consumables}</p>
                <p>hyperdrive rating: {hyperdrive_rating}</p>
                <p>MGLT: {MGLT}</p>
                <p>starships class: {starships_class}</p>
                <GetDataAPIFomLinksAtDetails
                    link={pilots}
                    category={'starships'}
                    elements={'pilots'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={films}
                    category={'starships'}
                    elements={'films'}
                />
            </DetailsCategoryElementStyled>
        )
    } else if (category === 'films') {
        console.log(data)
        const arrayData = Object.values(data)
        const [
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            relase_date,
            characters,
            planets,
            starships,
            vehicles,
            species,
        ] = arrayData
        return (
            <DetailsCategoryElementStyled>
                <p>title: {title}</p>
                <p>episode id: {episode_id}</p>
                <p>opening crawl: {opening_crawl}</p>
                <p>director: {director}</p>
                <p>producer: {producer}</p>
                <p>relase date: {relase_date}</p>
                <GetDataAPIFomLinksAtDetails
                    link={species}
                    category={'films'}
                    elements={'species'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={starships}
                    category={'films'}
                    elements={'starships'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={characters}
                    category={'films'}
                    elements={'characters'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={planets}
                    category={'films'}
                    elements={'planets'}
                />
                <GetDataAPIFomLinksAtDetails
                    link={vehicles}
                    category={'films'}
                    elements={'vehicles'}
                />
            </DetailsCategoryElementStyled>
        )
    } else {
        return (
            <DetailsCategoryElementStyled>Error</DetailsCategoryElementStyled>
        )
    }
}

export default DetailsCategoryElement
