
import MyDescComponent from './experience/MyDescComponent';
import EgamComponent  from './experience/EgamComponent';
import IronbitComponent from './experience/IronbitComponent';
import '../css/AboutMeComponent.css'

import { ThemeContext} from "../components/ThemeContext.jsx"
import { useContext } from 'react';

export default function AboutMeComponent(){

    const { theme } = useContext(ThemeContext);

    return(
       <div className={`about ${theme}`}>
         <div id="about-me-component">
            <div className='description-component'>
                <MyDescComponent />
            </div>
            {/*<div className='description-component'>
                <IronbitComponent />
            </div>*/}
            <div className='description-component'>
                <EgamComponent />
            </div>
        </div>
       </div>
    );
}

