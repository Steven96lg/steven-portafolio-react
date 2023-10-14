
import '../css/InfoComponent.css';

export default function InfoComponent(){

    const openContactModal = () => {
        let contactComponent = document.querySelector('.contact-component');
        contactComponent.style.display = 'flex';
    }

    return(
        <div id="info-component">
            <h2>Steven Layna</h2>
            <strong>Desarrollador Front-end Jr &#128187;</strong>
            <div className="links-component">
                <a href="https://www.linkedin.com/in/steven-layna-gonzalez-6aa96319b/" target='_blank'><i className="fas fa-link"></i> <span>Linkedin</span> <i className="fab fa-linkedin icons"></i></a>
                <a href="https://www.github.com/Steven96lg"><i className="fas fa-link"></i> <span>GitHub</span> <i className="fa-brands fa-github icons"></i></a>
                <button onClick={openContactModal} className="contact-btn"><span>Contactame</span> <i className="fas fa-paper-plane icons"></i></button>
            </div>
            <p><i className="fas fa-map-marker-alt"></i> Mexico, Ciudad de Mexico.</p>
        </div>
    );
}