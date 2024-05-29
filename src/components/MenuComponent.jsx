

import '../css/MenuComponent.css'
import { useContext, useState } from 'react';
import LinkComponent from './LinkComponent';
import { ThemeContext } from './ThemeContext';

export default function MenuComponent(){

    const [activeLink, setActiveLink] = useState("/");

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`menu ${theme}`}>
            <div id="menu-component">
                <nav>
                    <ul>      
                        <li onClick={() => handleSetActiveLink("/")}>
                            <LinkComponent
                                to="/" 
                                active={activeLink === "/" ? "active" : ""}
                                
                                >Sobre mi
                            </LinkComponent>
                        </li>
                        <li onClick={() => handleSetActiveLink("/techs")}>
                            <LinkComponent 
                                to="/techs"
                                active={activeLink === "/techs" ? "active" : ""}
                                >Tecnologias
                            </LinkComponent>
                        </li>
                        <li onClick={() => handleSetActiveLink("/portafolio")}>
                            <LinkComponent
                                to="/portafolio"
                                active={activeLink === "/portafolio" ? "active" : ""}
                                >Portafolio
                            </LinkComponent>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}