import { useEffect } from "react"

export const Message = () => {

    useEffect(()=>{
        
        const onMouseMove = ({x,y}) => {
            const coords = {x,y}
            console.log(coords);
        }

        // por ejemplo cada vez que se montara el componente se crearía un nuevo evento
        // y al desmontarse no se limpia, si no se hace la limpieza van a quedar varios 
        // varios elementos acumulados
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            // hay que decirle el evento que quiero eliminar y la referencia al evento para definir el espacio en memoria
            window.removeEventListener('mousemove', onMouseMove)
        }

    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
