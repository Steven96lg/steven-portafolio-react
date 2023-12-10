
import UserArticle from './UserArticle'
import '../css/AboutMeComponent.css'
import '../css/PortafolioComponent.css'
import { Projects }  from '../js/projects.js'

export default function PortafolioComponent(){

    const article = Projects.map(art => {
        return <Article key={art.id} title={art.title} img={art.img} description={art.description} link={art.link} techs={art.techs} dw_file={art.dw_file}/>
    })
    return(
        <div id="portafolio-component">
            <strong>Algunos de mis Proyectos.</strong>
            <div className="box-articles">
                { article }
            </div>
        </div>
    );
}

function Article({title, img, description, link, techs, dw_file}){

    return(
        <div className='article-box'>
            <UserArticle />
            <strong>{title}</strong>
            <Techs techs={techs}/>
            <div className='article-img-box'>
                <img src={img} alt={title} style={{objectFit: 'cover'}}/>
            </div>
            <p>
                { description }
            </p>
            <a href={link} target='_blank' download>{!dw_file ? 'Visitar Sitio' : 'Descargar Archivo'} <i className="fas fa-external-link-alt"></i></a>
        </div>
    )
}

function Techs({techs}){

    const useTechs = techs.map(tech => {
        return tech.using && <strong key={tech.id} style={{background: tech.color}}>{tech.name} <i className={tech.icon}></i></strong>
    })

    return(
        <>
            <div className="techs">
                { useTechs }
            </div>
        </>
    )
}

