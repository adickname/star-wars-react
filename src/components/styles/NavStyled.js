import styled from 'styled-components'

const NavStyled = styled.nav`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
export default NavStyled
