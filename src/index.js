import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import Planets from './components/Planets'
import People from './components/People'
import Films from './components/Films'
import Starships from './components/Starships'
import GetDataAPI from './getDataAPI'
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
        <BrowserRouter>
            <GlobalStyled />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/planets" element={<Planets />} />

                <Route path="/people" element={<People />} />

                <Route path="/films" element={<Films />} />

                <Route path="/starships" element={<Starships />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
