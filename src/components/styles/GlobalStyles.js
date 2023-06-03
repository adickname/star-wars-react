import { createGlobalStyle } from 'styled-components'
import img from './ZBf0Im.jpeg'
import { saturnColor } from './Variables'
const GlobalStyled = createGlobalStyle`
*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    color: ${saturnColor};
   
}
img{
    width: 100%;
}
`
export default GlobalStyled
