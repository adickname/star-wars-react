import NavStyled from './styles/NavStyled'
import Ul from './styles/UlStyled'
import LiStyleds from './styles/LiStyled'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <NavStyled>
            <Ul>
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
            </Ul>
        </NavStyled>
    )
}
export default Nav
