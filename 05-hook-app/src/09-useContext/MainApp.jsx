import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, Navbar } from './'


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            
            <Navbar/>
            <hr/>

            {/** Los links se usan para sustituir los a ya que los a hacían un refresco de la página
             * y hacía que se cargaran todas las librerías y componentes de manera innecesaria,
             * Con los links no hay refresh solo se hace un cambio del componente
             */}

            <Routes>
                <Route path='about' element={ <AboutPage/> } />
                <Route path='login' element={ <LoginPage/> } />
                <Route path='/' element={ <HomePage/> } />

                {/** Redirige cuando no existe la ruta, pero deja el url malo */}
                {/*<Route path='/*' element={<LoginPage/>}/>*/}

                {/** Redirige y modifica la ruta al elemento que redirigimos  */}
                <Route path='/*' element={ <Navigate to='about' /> }/>

            </Routes>
        </>
    )
}
