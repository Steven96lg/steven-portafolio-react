
import { Link } from 'react-router-dom';
import '../css/MenuComponent.css'

export default function MenuComponent(){

    return(
        <div id="menu-component">
            <nav>
                <ul>
                    <li><Link to="/">Sobre mi</Link></li>
                    <li><Link to="/techs">Tecnologias</Link></li>
                    <li><Link to="/portafolio">Portafolio</Link></li>
                </ul>
            </nav>
        </div>
    );
}