import Button from './styles/Button'
import React, { useContext, useEffect } from 'react'
import { numberContext } from '../App'
const ButtonsToNext = ({ buttons }) => {
    const [context, setContext] = useContext(numberContext)
    useEffect(() => {
        console.log(buttons)
    })
    return (
        <>
            {buttons === 4 ? (
                <>
                    <Button onClick={() => setContext(1)}>1</Button>
                    <Button onClick={() => setContext(2)}>2</Button>
                    <Button onClick={() => setContext(3)}>3</Button>
                    <Button onClick={() => setContext(4)}>4</Button>
                </>
            ) : (
                <>
                    <Button onClick={() => setContext(1)}>1</Button>
                    <Button onClick={() => setContext(2)}>2</Button>
                    <Button onClick={() => setContext(3)}>3</Button>
                    <Button onClick={() => setContext(4)}>4</Button>
                    <Button onClick={() => setContext(5)}>5</Button>
                    <Button onClick={() => setContext(6)}>6</Button>
                </>
            )}
        </>
    )
}
export default ButtonsToNext
