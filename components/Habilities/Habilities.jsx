const Habilities = () =>
<div className='uk-container uk-container-large' id='Habilidades'>
    <h2 className='uk-heading uk-heading-large uk-text-center uk-margin-large-top'>Habilidades</h2>
    <div className='uk-grid-medium uk-grid-match' data-uk-grid>
        <div className='uk-width-1-3@s'>
            <div className='uk-card card'>
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title">Front End</h3>
                    <p>
                        He desarrolado en JavaScript con <span className='uk-text-bold'>TypeScript</span>, experiencia en HTML5 y CSS3.<br/> Tengo intereses en 
                        <span className='uk-text-bold'> ReactJs</span> con <span className='uk-text-bold'>NextJs</span> en la parte de Server Side Rendering. 
                        <br/>He trabajado con frameworks como SASS, UiKit, Materialize, Bootstrap, jQuery, VueJs.
                    </p>
                </div>
            </div>
        </div>
        <div className='uk-width-1-3@s'>
            <div className='uk-card card'>
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title">Back End</h3>
                    <p>
                    Experiencia en <span className='uk-text-bold'>PHP, Laravel, MySql</span>, desarrollo de páginas web con manejo de bases de datos, autenticación a través de redes sociales, uso de roles, formularios de contacto, <span className='uk-text-bold'>REST API</span>, recaptcha e integración de <span className='uk-text-bold'>API Mercado Pago (Certified Developer).</span>
                    </p>
                    <a className="uk-button uk-button-default uk-text-small uk-width-1-2 uk-padding-remove-left uk-padding-remove-right uk-margin-small-left" 
                        href="https://portafolio-carlos-garcia-17.herokuapp.com/src/pdf/6.pdf">
                        Ver certificado
                        <span data-uk-icon="icon: arrow-right; ratio: 1" className="uk-margin-small-left custom-white"></span>
                    </a>
                </div>
            </div>
        </div>
        <div className='uk-width-1-3@s'>
            <div className='uk-card card'>
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title">Soporte y extras</h3>
                    <p>
                        Brindo apoyo y orientación sobre cualquier inconveniente que se presente con base en mis conocimientos, hasta nivel intermedio.<br/> Tengo conocimientos en el uso de control de versiones <span className='uk-text-bold'>Git</span> y <span className='uk-text-bold'>GitHub</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

export default Habilities;