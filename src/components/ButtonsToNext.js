import Button from './styles/Button'
import React from 'react'

const ButtonsToNext = ({ buttons, setNumberState }) => {
    const buttonsRender = (buttonsNumber) => {
        let toRender = []
        for (let i = 1; i <= buttonsNumber; i++) {
            toRender.push(
                <Button onClick={() => setNumberState(i)}>{i}</Button>
            )
        }
        return toRender
    }
    return <>{buttonsRender(buttons)}</>
}
export default ButtonsToNext
