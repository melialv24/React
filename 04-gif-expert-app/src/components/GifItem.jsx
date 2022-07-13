import React from 'react'
import PropTypes from 'prop-types'
import { url } from 'inspector'

export const GifItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img src={url} alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}

GifItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
