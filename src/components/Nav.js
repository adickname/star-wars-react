import NavStyled from './styles/NavStyled'
import Ul from './Ul'
import LiStyleds from './styles/LiStyled'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState()
    function handleClick() {
        setIsOpen(!isOpen)
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
                    <h1>Star Wars Wiki</h1>
                    <Ul></Ul>
                </>
            ) : (
                <>
                    {' '}
                    <NavStyled onClick={() => handleClick()}>
                        <>
                            <Hamburger></Hamburger>
                            <h1>STAR WARS WIKI</h1>
                        </>
                        <>{isOpen && <Ul></Ul>}</>
                    </NavStyled>
                </>
            )}
        </NavStyled>
    )
}
export default Nav
