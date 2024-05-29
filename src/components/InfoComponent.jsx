
import '../css/InfoComponent.css';
import { ThemeContext } from "../components/ThemeContext.jsx"
import { useContext } from 'react';

export default function InfoComponent(){

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`info ${theme}`}>
            <div id="info-component">
                <h1>Steven Layna</h1>
                <strong>Desarrollador Front-end &#128187;</strong>
                <div className="links-component">
                    <a href="https://www.linkedin.com/in/steven-layna-gonzalez-6aa96319b/" target='_blank'><i className="fas fa-link"></i> <span>Linkedin</span> <i className="fab fa-linkedin icons"></i></a>
                    <a href="https://www.github.com/Steven96lg"><i className="fas fa-link"></i> <span>GitHub</span> <i className="fa-brands fa-github icons"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5565081247" className="contact-btn"><span>Contactame</span> <i className="fab fa-whatsapp icons"></i></a>
                </div>
                <p><i className="fas fa-map-marker-alt"></i> Mexico, Ciudad de Mexico.</p>
            </div>
        </div>
    );
}