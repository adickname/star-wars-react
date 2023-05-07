import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import Nav from './components/Nav'
//import { BrowserRouter } from 'react-router-dom'

const GlobalStyled = createGlobalStyle`
body{
    background-image: url(./ZBf0Im.jpeg);
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyled />
        <Nav></Nav>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
