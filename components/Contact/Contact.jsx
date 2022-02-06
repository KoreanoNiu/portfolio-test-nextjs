const Contact = () =>
<div className='uk-container uk-container-large uk-margin-large-top contacto' id='Contacto'>
    <div className='uk-text-center' data-uk-grid>
        <div className='uk-width-1-1'>
            <h2 className='message uk-heading uk-heading-large'>
                <span className='hr'>¡Hola<br/>mundo!</span><br/>
            </h2>
        </div>
        <div className='contact uk-width-1-1 uk-child-width-1-1 uk-flex uk-flex-center uk-flex-wrap'>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="#" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: mail; ratio: 2.3;"></span> Mail</a></h3>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="#" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: github; ratio: 2.3"></span> Github</a></h3>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="#" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: facebook; ratio: 2.3"></span> Facebook</a></h3>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="#" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: whatsapp; ratio: 2.3"></span> WhatsApp</a></h3>
        </div>
        <div className='uk-width-1-1 uk-visible@m'>
            <h2 className='message uk-heading uk-heading-medium uk-margin-medium-top'>
                <span className='hr'>¿Trabajamos<br/>juntos?</span><br/>
            </h2>
        </div>
        <div className='uk-width-1-1 uk-hidden@m uk-margin-medium-top'>
            <h2 className='message uk-heading'>
                <span className='hr'>¿Trabajamos<br/>juntos?</span><br/>
            </h2>
        </div>
    </div>
</div>

export default Contact;