
import '../css/FooterComponent.css'
import { ThemeContext } from "../components/ThemeContext.jsx"
import { useContext } from 'react'

export default function FooterComponent(){
    const date = new Date()

    const { theme } = useContext(ThemeContext)

    return(
        <div className={`footer ${theme}`}>
            <p>Steven Layna &copy; {date.getFullYear()}</p>
        </div>
    )
}