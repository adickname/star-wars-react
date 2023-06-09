import styled from 'styled-components'
import { dagobahColor } from './Variables'
const NavStyled = styled.nav`
    background-color: ${dagobahColor};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 20px 20px;
    }
`
export default NavStyled
