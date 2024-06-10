
import { GradientTextComponent } from './GradientTextComponent.jsx';
import '../css/InfoComponent.css';
import { ThemeContext } from "../components/ThemeContext.jsx"
import { LinkAComponent } from './LinkAComponent.jsx';
import { useContext } from 'react';

export default function InfoComponent(){

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`info ${theme}`}>
            <div id="info-component">
                <GradientTextComponent text="Steven Layna" size="L"/>
                <strong>Desarrollador Front-end &#128187;</strong>
                <div className="links-component">
                    <LinkAComponent color="gray" color_hover="#0A66C2" icon={<i className="fab fa-linkedin icons"></i>} url="https://www.linkedin.com/in/steven-layna-gonzalez-6aa96319b/">Linkedin</LinkAComponent>
                    <LinkAComponent color="gray" color_hover="white" icon={<i className="fa-brands fa-github icons"></i>} url="https://www.github.com/Steven96lg">Github</LinkAComponent>
                    <LinkAComponent color="gray" color_hover="#25D366" icon={<i className="fab fa-whatsapp icons"></i>} url="https://api.whatsapp.com/send?phone=5565081247">Contacto</LinkAComponent>
                </div>
                <p><i className="fas fa-map-marker-alt"></i> Mexico, Ciudad de Mexico.</p>
            </div>
        </div>
    );
}