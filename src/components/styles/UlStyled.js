import styled from 'styled-components'

const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
export default UlStyled
