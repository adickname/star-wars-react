import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/content/Home'
import Planets from './components/content/Planets'
import People from './components/content/People'
import Films from './components/content/Films'
import Starships from './components/content/Starships'
import GlobalStyles from './components/styles/GlobalStyles'

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/planets" element={<Planets />} />

                <Route path="/people" element={<People />} />

                <Route path="/starships" element={<Starships />} />

                <Route path="/films" element={<Films />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
