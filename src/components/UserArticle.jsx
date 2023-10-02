
import imgProfile2 from '../assets/imgProfile2.jpg'
import '../css/AboutMeComponent.css'

export default function UserArticle(){
    return(
        <div className="user-article">
            <img src={imgProfile2} alt="profile" />
            <strong>Steven Layna 👾🧑</strong>
        </div>
    )
}