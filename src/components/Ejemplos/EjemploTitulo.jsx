import { useEffect } from "react"

const EjemploTitulo = () => {

    useEffect(() => {

        const mostrarAnchoVentana = () => {
            console.log("Ancho: ", window.innerWidth);
        }
        window.addEventListener('resize', mostrarAnchoVentana)
        return () => {
            window.removeEventListener('resize', mostrarAnchoVentana);
        }
    }, [])


    return (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default EjemploTitulo