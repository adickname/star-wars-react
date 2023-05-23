import GetDataAPI from './DataAPICategory'

const Films = () => {
    return (
        <GetDataAPI link={'https://swapi.dev/api/films/'} category={'films'} />
    )
}

export default Films
