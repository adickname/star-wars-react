import GetDataAPI from './DataAPICategory'

const Starships = () => {
    return (
        <GetDataAPI
            link={'https://swapi.dev/api/starships/'}
            category={'starships'}
        />
    )
}

export default Starships
