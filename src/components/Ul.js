import UlStyled from './styles/UlStyled'
import LiStyleds from './styles/LiStyled'
import NavbarLink from './styles/NavbarLink'
const Ul = () => {
    return (
        <UlStyled>
            <NavbarLink to="/">
                <LiStyleds>Home</LiStyleds>
            </NavbarLink>
            <NavbarLink to="/planets">
                <LiStyleds>Planets</LiStyleds>
            </NavbarLink>
            <NavbarLink to="/people">
                <LiStyleds>People</LiStyleds>
            </NavbarLink>
            <NavbarLink to="/films">
                <LiStyleds>Films</LiStyleds>
            </NavbarLink>
            <NavbarLink to="starships">
                <LiStyleds>Starships</LiStyleds>
            </NavbarLink>
        </UlStyled>
    )
}

export default Ul
