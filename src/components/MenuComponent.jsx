

import '../css/MenuComponent.css'
import { useState } from 'react';
import LinkComponent from './LinkComponent';

export default function MenuComponent(){

    const [activeLink, setActiveLink] = useState("/");

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return(
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
                            active={activeLink === "/techs" ? "active" : ""}
                            >Tecnologias
                        </LinkComponent>
                    </li>
                    <li onClick={() => handleSetActiveLink("/portafolio")}>
                        <LinkComponent
                            active={activeLink === "/portafolio" ? "active" : ""}
                            >Portafolio
                        </LinkComponent>
                    </li>
                </ul>
            </nav>
        </div>
    );
}