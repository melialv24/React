import PropTypes from "prop-types"

export const FirstApp = ( { title, subTitle } ) => {

    if ( !title ) {
        throw new Error('El title no existe')
    }

    return (
        <>
            <div data-testid='test-title'> { title } </div>
            <p>{ subTitle }</p>
        </>
    )
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay título'
}