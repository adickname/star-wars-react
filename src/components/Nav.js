import NavStyled from './styles/NavStyled'
import Ul from './Ul'
import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import H1styled from './styles/H1'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [toggled, setToggled] = useState()
    const [width, setWidth] = useState()
    function handleClick() {
        setIsOpen(!isOpen)
        setToggled(!toggled)
    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('load', handleResize)
        window.addEventListener('resize', handleResize)
    })

    return (
        <NavStyled>
            {width > 768 ? (
                <>
                    <H1styled>Star Wars Wiki</H1styled>
                    <Ul></Ul>
                </>
            ) : (
                <>
                    {' '}
                    <NavStyled onClick={() => handleClick()}>
                        <>
                            <Hamburger toggled={toggled}></Hamburger>
                            <h1>STAR WARS WIKI</h1>
                        </>
                        <>{isOpen && <Ul setToggled={setToggled}></Ul>}</>
                    </NavStyled>
                </>
            )}
        </NavStyled>
    )
}
export default Nav
