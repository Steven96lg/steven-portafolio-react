
import { Icon } from "@iconify-icon/react";

import '../css/NotFound.css'

const NotFoundComponent = () => {

    const iconStyle = {
        fontSize: '160px',
        marginBottom: '10px'
    }

    return(
        <div className="not-found">
            <div className="error-found">

                <Icon icon="tabler:error-404" style={iconStyle}/>
            </div>
            <h2>Pagina no encontrada</h2>
        </div>
    )
}

export default NotFoundComponent;