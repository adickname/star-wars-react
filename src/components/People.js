import GetDataAPI from './DataAPICategory'

const People = () => {
    return (
        <GetDataAPI
            link={'https://swapi.dev/api/people/'}
            category={'people'}
        />
    )
}

export default People
