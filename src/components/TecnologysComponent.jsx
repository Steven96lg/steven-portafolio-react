
import '../css/TecnologysComponent.css'

export default function TecnologysComponent(){

    return(
        <div id='tech-component'>
            <strong>Mis Herramientas y Tecnologias.</strong>
            <div className='skills-content'>
                <div className='skills-box'>
                    <i className="fa-brands fa-html5 fs"></i>
                    <strong>HTML5</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-css3 fs"></i>
                    <strong>CSS3</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-square-js fs"></i>
                    <strong>JavaScript</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-bootstrap fs"></i>
                    <strong>BootStrap</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-vuejs fs"></i>                  
                    <strong>Vue3</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-react fs"></i>
                    <strong>React JS</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-git-alt fs"></i>
                    <strong>Git</strong>
                </div>
                <div className='skills-box'>
                    <i className="fa-brands fa-github fs"></i>
                    <strong>GitHub</strong>
                </div>
                <div className='skills-box'>
                <i className="fa-solid fa-mobile-screen-button fs"></i>
                    <strong>Diseño Responsivo</strong>
                </div>
            </div>
        </div>
    );
}