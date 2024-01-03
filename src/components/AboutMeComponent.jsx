
import MyDescComponent from './experience/MyDescComponent';
import EgamComponent  from './experience/EgamComponent';
import IronbitComponent from './experience/IronbitComponent';
import '../css/AboutMeComponent.css'

export default function AboutMeComponent(){

    return(
        <div id="about-me-component">
            <div className='description-component'>
                <MyDescComponent />
            </div>
            <div className='description-component'>
                <IronbitComponent />
            </div>
            <div className='description-component'>
                <EgamComponent />
            </div>
        </div>
    );
}

