import LiStyled from './styles/LiStyled'
import NavStyled from './styles/NavStyled'
import Ul from './styles/UlStyled'
import LiStyleds from './styles/LiStyled'
const Nav = () => {
    return (
        <NavStyled>
            <Ul>
                <LiStyleds>Home</LiStyleds>
                <LiStyleds>Planets</LiStyleds>
                <LiStyleds>People</LiStyleds>
                <LiStyleds>Films</LiStyleds>
                <LiStyleds>Starships</LiStyleds>
            </Ul>
        </NavStyled>
    )
}
export default Nav
