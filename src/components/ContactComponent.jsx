
import '../css/ContactComponent.css';

function ContactComponent(){

    return(
        <div className="contact-component">
            <div className="content-modal">
                <h2>Enviame un Email</h2>
                <div className="modal-contact">
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Email"/>
                    <textarea cols="30" rows="10" placeholder="Deja un mensaje"></textarea>
                    <button className='send-form'>Enviar mensaje</button>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;