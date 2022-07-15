import { useState } from "react";
import { useLayoutEffect, useRef } from "react";



export const Quote = ({ quote, author }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {

        //el .current es para tomar el valor actual
        const { width, height} = pRef.current.getBoundingClientRect()

        setBoxSize({
            width, 
            height
        })


    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p 
                    className="mb-2"
                    ref={pRef}
                >
                    { quote }
                </p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

            <code> { JSON.stringify(boxSize) } </code>
        </>
    )
}
