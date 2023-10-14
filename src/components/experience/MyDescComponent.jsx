
import UserArticle from "../UserArticle"

export default function MyDescComponent(){
    return(
        <>
            <UserArticle/>
            <div className="article-content">
                <strong className="s-saludo">Saludos!!👋</strong>
                <p>Te doy la bienvenida a mi portafolio, este es mi pequeño espacio personal donde podrás saber un poco sobre mí experiencia y mis proyectos.</p>
            </div>
        </>
    );
}