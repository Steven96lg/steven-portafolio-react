
import { Icon } from '@iconify-icon/react';
import '../css/TecnologysComponent.css'

import { ThemeContext} from "./ThemeContext.jsx"
import { useContext } from 'react';

export default function TecnologysComponent(){

    const iconStyle = {
        fontSize: '60px',
        marginBottom: '10px'
    }

    const { theme } = useContext(ThemeContext);

    return(
        <div className={`tech ${theme}`}>
            <div id='tech-component'>
                <strong>Mis Herramientas y Tecnologias.</strong>
                <div className='skills-content'>
                    <div className='skills-box'>
                        <Icon icon="skill-icons:html" style={iconStyle}/>
                        <strong>HTML5</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="skill-icons:css" style={iconStyle}/>
                        <strong>CSS3</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="skill-icons:javascript" style={iconStyle}/>
                        <strong>JavaScript</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="devicon:bootstrap" style={iconStyle}/>
                        <strong>BootStrap</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:vue" style={iconStyle}/>                  
                        <strong>Vue3</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:react" style={iconStyle}/>
                        <strong>React JS</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:nodejs-icon" style={iconStyle} />
                        <strong>Node JS</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:python" style={iconStyle}/>
                        <strong>Python</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:mysql" style={iconStyle}/>
                        <strong>MySQL</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="vscode-icons:file-type-jest" style={iconStyle}/>
                        <strong>Jest JS</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:git-icon" style={iconStyle}/>
                        <strong>Git</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="logos:github-octocat" style={iconStyle}/>
                        <strong>GitHub</strong>
                    </div>
                    <div className='skills-box'>
                        <Icon icon="flat-ui:responsive" style={iconStyle}/>
                        <strong>Responsive</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}