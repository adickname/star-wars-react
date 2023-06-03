import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { saturnColor } from './Variables'
const NavbarLink = styled(Link)`
    color: ${saturnColor};
    font-weight: 800;
    text-decoration: none;
`
export default NavbarLink
