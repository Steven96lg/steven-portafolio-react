
import { Link } from "react-router-dom"
import "../css/MenuComponent.css"

export default function LinkComponent({children, to, active}){

    return <Link className={active} to={to}>{children}</Link>
} 