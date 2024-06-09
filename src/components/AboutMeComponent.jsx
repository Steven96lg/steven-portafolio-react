
import UserArticle from './UserArticle.jsx';
import  { experience } from "../utils/experience.js"
import '../css/AboutMeComponent.css'

import { ThemeContext} from "../components/ThemeContext.jsx"
import { useContext } from 'react';

export default function AboutMeComponent(){

    const { theme } = useContext(ThemeContext);

    return(
       <div className={`about ${theme}`}>
         <div id="about-me-component">
            {
                experience.map(exp => (
                    <div key={exp.title} className='description-component'>
                        <UserArticle />
                        <strong>{exp.title}</strong>
                        <div className='img-exp'>
                            {exp.img !== null ? <img src={exp.img}/> : ""}
                        </div>
                        <p>{exp.description}</p>
                    </div>
                ))
            }
        </div>
       </div>
    );
}

