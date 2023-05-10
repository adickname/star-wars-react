import NavStyled from './styles/NavStyled'
import Ul from './Ul'
import LiStyleds from './styles/LiStyled'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <NavStyled onClick={() => handleClick()}>
            <>
                <Hamburger></Hamburger>
                <h1>STAR WARS WIKI</h1>
            </>
            <>{isOpen && <Ul></Ul>}</>
        </NavStyled>
    )
}
export default Nav
