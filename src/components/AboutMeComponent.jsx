
import MyDescComponent from './experience/MyDescComponent';
import  EgamComponent  from './experience/EgamComponent';
import '../css/AboutMeComponent.css'

export default function AboutMeComponent(){

    return(
        <div id="about-me-component">
            <div className='description-component'>
                <MyDescComponent />
            </div>
            <div className='description-component'>
                <EgamComponent />
            </div>
        </div>
    );
}

