import React from 'react'
import { PropTypes } from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )
    console.log({ images, isLoading });
    /*const [infoImage, setinfoImage] = useState([])

    useEffect( () => {

        getGifs( category )
            .then( newImages => setinfoImage(newImages))
        
    }, [])*/

    return (
        <>
            <h3>{ category }</h3>

            { isLoading ? 
                (
                    <div>
                        <h2>Cargando...</h2>
                    </div>
                    
                )
                :
                (
                    <div className='card-grid'>
                        { images.map( img => (
                            <GifItem key={img.id}
                                {...img}
                            />
                        )) }
                    </div>
                )
            }
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}