import React from 'react'
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

    const [infoImage, setinfoImage] = useState([])

    useEffect( () => {

        getGifs( category )
            .then( newImages => setinfoImage(newImages))
        
    }, [])

    return (
        <>
            <h3>{ category }</h3>
        
            <div className='card-grid'>
                { infoImage.map( img => (
                    <GifItem key={img.id}
                        {...img}
                    />
                )) }
            </div>
        </>
    )
}
