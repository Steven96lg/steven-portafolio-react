
import imgProfile from '../assets/imgProfile2.jpg'
import myCv from '../assets/Steven-CV.pdf'
import '../css/HeaderComponent.css'

export default function HeaderComponent(){
    return(
        <>
            <div className="img-content">
                <img src="https://i.pinimg.com/originals/40/bf/50/40bf5022f099e7030c11e17e50f4b3da.png" alt="image" className='portadaImg'/>
                <img src={imgProfile} alt="profile" className='perfilImg'/>
                <a href={myCv} className="enlace-cv" download>Descargar CV</a>
            </div>
        </>
    );
}