
import '../css/InfoComponent.css';

export default function InfoComponent(){
    return(
        <div id="info-component">
            <h2>Steven Layna</h2>
            <strong>Desarrollador Front-end Jr &#128187;</strong>
            <div className="links-component">
                <a href="https://www.linkedin.com/in/steven-layna-gonzalez-6aa96319b/" target='_blank'><i className="fas fa-link"></i> Linkedin <i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fas fa-link"></i> GitHub <i className="fa-brands fa-github"></i></a>
            </div>
            <p><i className="fas fa-map-marker-alt"></i> Mexico, Ciudad de Mexico.</p>
        </div>
    );
}