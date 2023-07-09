import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Planets from './components/Planets'
import People from './components/People'
import Films from './components/Films'
import Starships from './components/Starships'
import GlobalStyles from './components/styles/GlobalStyles'
import ButtonsToNext from './components/ButtonsToNext'
export const numberContext = React.createContext()
const App = () => {
    const [context, setContext] = useState(1)
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Nav />{' '}
            <numberContext.Provider value={[context, setContext]}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/planets"
                        element={
                            <>
                                <Planets /> <ButtonsToNext buttons={6} />
                            </>
                        }
                    />

                    <Route
                        path="/people"
                        element={
                            <>
                                <People /> <ButtonsToNext buttons={6} />
                            </>
                        }
                    />

                    <Route
                        path="/starships"
                        element={
                            <>
                                <Starships /> <ButtonsToNext buttons={4} />
                            </>
                        }
                    />

                    <Route path="/films" element={<Films />} />
                </Routes>{' '}
            </numberContext.Provider>
        </BrowserRouter>
    )
}

export default App
