import GetDataAPI from './DataAPICategory'

const Planets = () => {
    return (
        <GetDataAPI
            link={'https://swapi.dev/api/planets/'}
            category={'planets'}
        />
    )
}

export default Planets
