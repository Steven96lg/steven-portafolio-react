
import '../css/FooterComponent.css'

export default function FooterComponent(){
    const date = new Date()
    return(
        <div id="footer-component">
            <p>Steven Layna &copy; {date.getFullYear()}</p>
        </div>
    )
}