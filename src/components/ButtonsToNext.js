import Button from './styles/Button'
import React, { useContext } from 'react'
import { numberContext } from '../App'
const ButtonsToNext = ({ buttons }) => {
    const [context, setContext] = useContext(numberContext)

    const buttonsRender = (buttonsNumber) => {
        let toRender = []
        for (let i = 1; i <= buttonsNumber; i++) {
            toRender.push(<Button onClick={() => setContext(i)}>{i}</Button>)
        }
        return toRender
    }
    return <>{buttonsRender(buttons)}</>
}
export default ButtonsToNext
