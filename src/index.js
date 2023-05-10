import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Planets from './components/Planets'
import People from './components/People'
import Films from './components/Films'
import Starships from './components/Starships'
import GlobalStyles from './components/styles/GlobalStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles />
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
