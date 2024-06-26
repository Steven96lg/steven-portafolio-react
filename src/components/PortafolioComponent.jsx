
import { useEffect, useState, useRef, useContext } from 'react';
import '../css/AboutMeComponent.css';
import '../css/PortafolioComponent.css';
import { Projects } from '../utils/projects.js';
import { ThemeContext } from "./ThemeContext.jsx"

export default function PortafolioComponent() {
  const article = Projects.map((art) => {
    return <Article key={art.id} title={art.title} img={art.img} description={art.description} link={art.link} techs={art.techs} dw_file={art.dw_file} />;
  });

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`port ${theme}`}>
      <div id="portafolio-component">
        <strong>Algunos de mis Proyectos.</strong>
        <div className="box-articles">{article}</div>
      </div>
    </div>
  );
}

function Article({ title, img, description, link, techs, dw_file }) {

  const articleRef = useRef()
  const [visible, setVisible] = useState(false)
  
  const animationStyle = {
    opacity: visible ? '1' : '0',
    transition: "all 1.5s",
  }

  useEffect(() => {

    const elementArticle = articleRef.current;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((element) => {
            setVisible(element.isIntersecting)
        })
    },
    {
        threshold: 0.2
    })

    if(elementArticle){
        observer.observe(elementArticle)
    }
  }, [])
  
  return (
    <div className="article-box" ref={articleRef} style={animationStyle}>
      
      <strong>{title}</strong>
      <Techs techs={techs} />
      <div className="article-img-box">
        <img src={img} alt={title} style={{ objectFit: 'cover' }} />
      </div>
      <p>{description}</p>
      <a href={link} target="_blank" download>
        {!dw_file ? 'Visitar Sitio' : 'Descargar Archivo'} <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
}

function Techs({ techs }) {
  const useTechs = techs.map((tech) => {
    return tech.using && <strong key={tech.id} style={{ background: tech.color }}>{tech.name} <i className={tech.icon}></i></strong>;
  });

  return <div className="techs">{useTechs}</div>;
}
