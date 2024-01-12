
import { Routes, Route } from 'react-router-dom';

//Componentes para las rutas
import AboutMeComponent from './components/AboutMeComponent.jsx';
import TecnologysComponent from './components/TecnologysComponent.jsx';
import PortafolioComponent from './components/PortafolioComponent.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';

export default function RouterComponent(){
    return(
        <Routes>
            <Route path="/" element={ <AboutMeComponent /> }></Route>
            <Route path="/techs" element={ <TecnologysComponent /> }></Route>
            <Route path="/portafolio" element={ <PortafolioComponent /> }></Route>
            <Route path="*" element={<NotFoundComponent />}></Route>
        </Routes>
    )
}