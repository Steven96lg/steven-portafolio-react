
import { Icon } from '@iconify-icon/react';
import "../App.css"
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export const ThemeComponent = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = {
        sun: {color: "yellow"},
        moon: {color: "gray"}
    }

    return (
        <div className='theme-component'>
            <button onClick={toggleTheme}>
                {
                    theme === "dark" 
                    ?
                    <Icon icon="line-md:sun-rising-filled-loop" style={styles.sun}/>
                    :
                    <Icon icon="line-md:moon-alt-loop" style={styles.moon} /> 
                }   
            </button>
        </div>
    )
}