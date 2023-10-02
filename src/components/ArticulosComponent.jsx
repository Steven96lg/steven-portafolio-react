
import { Link } from 'react-router-dom'
import UserArticle from './UserArticle.jsx'
import '../css/ArticulosComponent.css'
import { Articles } from '../js/articles.js'

export default function ArticulosComponent(){

    const showAllArticles = Articles.map(art => {
        return <ShowArticle key={art.id} title={art.title} icon={art.icon} theme={art.theme} color={art.color}/>
    })

    return(
        <div id="show-articles-component">
            <div className="articles-box">
                { showAllArticles }
            </div>
        </div>
    );
}

function ShowArticle({title, icon, theme, color}){

    let newTitle = title.split(',').join('')
    newTitle = newTitle.split(' ').join('-')

    return(
        <div className="show-article">
            <UserArticle />
            <Link to={`/articulos/${newTitle}`}>{title}</Link>
            <span style={{color: color}}>{theme} <i className={icon}></i></span>
        </div>
    )
}