
import UserArticle from '../UserArticle';
import egamSteven from './img/egam-steven.jpeg';

export default function EgamComponent(){
    return(
        <>
            <UserArticle />
            <div className="article-content">
                <p className='p-exp'>
                    Egam-Digital: <strong className='strong-date'>04/05/23 - 19/12/23.</strong>
                </p>
                <div className='img-box'>
                    <img src={egamSteven} alt="img" />
                </div>
                <p>
                    Me desempeñé como desarrollador <strong>front-end</strong> en una empresa llamada Egam-digital. Trabajé con las tecnologías <strong className="strong-js">JavaScript <i class="fab fa-js-square"></i></strong>, <strong className="strong-vue">Vue3 <i className="fa-brands fa-vuejs"></i></strong> y <strong className='strong-boot'>Bootstrap <i className="fa-brands fa-bootstrap"></i></strong> para el desarrollo de interfaces gráficas en los módulos requeridos por la empresa.
                </p>

            </div>
        </>
    )
}