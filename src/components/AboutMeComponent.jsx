
import UserArticle from './UserArticle';
import '../css/AboutMeComponent.css'

export default function AboutMeComponent(){

    return(
        <div id="about-me-component">
            <div className='description-component'>
                <ArticleContent />
            </div>
        </div>
    );
}

function ArticleContent(){
    return(
        <>
        <UserArticle />
        <div className="article-content">
            <strong>Saludos!!👋</strong>
            <p>Te doy la bienvenida a mi portafolio, este es mi pequeño espacio personal donde podrás saber un poco sobre mí y mis proyectos.</p>
            <div className='img-box'>
                <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            </div>
            <p>
                Actualmente me desempeño como desarrollodor front-end en una empresa llamada Egam-digital, comence el <strong className='strong-date'>04-05-23</strong>, trabajo con las tecnologias <strong className="strong-js">JavaScript <i class="fab fa-js-square"></i></strong>, <strong className="strong-vue">Vue3 <i className="fa-brands fa-vuejs"></i></strong> y <strong className='strong-boot'>Bootstrap <i className="fa-brands fa-bootstrap"></i></strong> para el desarrollo de interfaces graficas en los modulos requeridos por la empresa.
            </p>
        </div>
        </>
    )
}