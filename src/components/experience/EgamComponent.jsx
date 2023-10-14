
import UserArticle from '../UserArticle';
import egamSteven from './img/egam-steven.jpeg';

export default function EgamComponent(){
    return(
        <>
            <UserArticle />
            <div className="article-content">
                <p className='p-exp'>
                    Mi experiencia en Egam-Digital.
                </p>
                <div className='img-box'>
                    <img src={egamSteven} alt="img" />
                </div>
                <p>
                    Actualmente me desempeño como desarrollodor <strong>front-end</strong> en una empresa llamada Egam-digital, comence el <strong className='strong-date'>04-05-23</strong>, trabajo con las tecnologias <strong className="strong-js">JavaScript <i class="fab fa-js-square"></i></strong>, <strong className="strong-vue">Vue3 <i className="fa-brands fa-vuejs"></i></strong> y <strong className='strong-boot'>Bootstrap <i className="fa-brands fa-bootstrap"></i></strong> para el desarrollo de interfaces graficas en los modulos requeridos por la empresa.
                </p>
            </div>
        </>
    )
}