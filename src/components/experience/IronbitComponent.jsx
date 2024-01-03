

import UserArticle from '../UserArticle';
import ironbitImg from './img/ironbit.png';

export default function EgamComponent(){
    return(
        <>
            <UserArticle />
            <div className="article-content">
                <p className='p-exp'>
                    Ironbit: <strong className='strong-date'>29/12/23 - Actualmente...</strong>
                </p>
                <div className='img-box'>
                    <img src={ironbitImg} alt="img" />
                </div>
                <p>
                    Actualizando...
                </p>

            </div>
        </>
    )
}