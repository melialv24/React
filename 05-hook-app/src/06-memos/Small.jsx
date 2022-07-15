import { memo } from 'react'

export const Small = memo(({ value }) => {

    return (
        <small>{value}</small>
    )
})

// react siempre vuelve a ejecutar las funciones que son llamadas en el componente 
// de igual manera si no hay ningún cambio no lo vuelve a renderizar pero si lo ejecuta
// en estos casos se utiliza el memo, para que no se realiza nada hasta que hayan un cambio en las props
// memo le dice a react que memorice el componente, y recibe como parametro todo el componente