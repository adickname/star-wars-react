import UlStyled from './styles/UlStyled'
import LiStyleds from './styles/LiStyled'
import { Link } from 'react-router-dom'
const Ul = () => {
    return (
        <UlStyled>
            <Link to="/">
                <LiStyleds>Home</LiStyleds>
            </Link>
            <Link to="/planets">
                <LiStyleds>Planets</LiStyleds>
            </Link>
            <Link to="/people">
                <LiStyleds>People</LiStyleds>
            </Link>
            <Link to="/films">
                <LiStyleds>Films</LiStyleds>
            </Link>
            <Link to="starships">
                <LiStyleds>Starships</LiStyleds>
            </Link>
        </UlStyled>
    )
}

export default Ul
