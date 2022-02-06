const AboutMe = () =>
<div className='uk-container uk-container-large'>
    <div className='uk-grid-small' data-uk-grid>
        <div className='uk-width-expand@s'>
            <h2 className='message uk-heading uk-heading-xlarge'>
                <span className='hr'>Las</span><br/>
                <span className='hr'>cosas</span><br/>
                <span className='hr'>buenas</span><br/>
                <span className='hr'>toman</span><br/>
                <span className='hr'>tiempo</span>
            </h2>
        </div>
        <div className='uk-width-1-2@s uk-text-right'>
            <h3 className='uk-margin-remove-bottom'><span className='uk-text-bold'>
                Hola!</span> Mi nombre es <span className='uk-text-bold' style={{fontFamily: 'Meuligoe', fontSize: '2rem', fontWeight: 600}}>Carlos.</span>
            </h3>
            <h3 className='uk-margin-remove-top'>
                Soy un <span className='uk-text-bold'>Desarrollador Web </span>
                entusiasta y encantado por la programación, y la música. Actualmente estoy disponible para trabajar de manera 
                <span className='uk-text-bold'> remota</span>, o 
                <span className='uk-text-bold'> presencial</span> en la ciudad de <span className='uk-text-bold'>Zamora, 
                Michoacán.</span> Si tienes un proyecto que deseas comenzar o consideras que necesitas de mis servicios, ponte en contacto.
            </h3>
            <a className="uk-button uk-button-default uk-text-small uk-width-small"
                href="https://portafolio-carlos-garcia-17.herokuapp.com/src/pdf/carlosliracv.pdf">
                VER C.V
                <span data-uk-icon="icon: file-text; ratio: 1" className="uk-margin-small-left custom-white"></span>
            </a>
            <a className="uk-button uk-button-default uk-text-small uk-width-small uk-margin-small-left" 
                href="https://api.whatsapp.com/send?phone=523511298049&text=¿Hola,%20qué%20tal?%0aNecesito de tus servicios,%20me%20gustaría%20saber%20más%20sobre%20ello.">
                ¡Contáctame!
                <span data-uk-icon="icon: whatsapp; ratio: 0.8" className="uk-margin-small-left custom-white"></span>
            </a>
        </div>
    </div>
</div>

export default AboutMe;