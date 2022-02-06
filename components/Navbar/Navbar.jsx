const Navbar = () =>
<div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark;">
    <nav className="uk-navbar-container display-none">
        <div className="uk-container nav uk-container-expand">
            <div data-uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">CARLOS LIRA</a>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@m">
                        <li className='uk-navbar-item'><a className="uk-button-text" href="#SobreMi">Sobre mí</a></li>
                        <li className='uk-navbar-item'><a className="uk-button-text" href="#Habilidades">Habilidades</a></li>
                        <li className='uk-navbar-item'><a className="uk-button-text" href="#Trabajo">Trabajo</a></li>
                        <li className='uk-navbar-item'><a className="uk-button-text" href="#Contacto">Contacto</a></li>
                    </ul>
                    <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas"></a>
                </div>
            </div>
        </div>
    </nav>
    <div id="offcanvas" data-uk-offcanvas="flip: false; overlay: true">
        <div className="uk-offcanvas-bar">
            <h3>CARLOS LIRA</h3>
            <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li className='uk-button-text uk-width-small'><a href="#SobreMi"><span className="uk-margin-small-right" data-uk-icon="icon: user"></span> Sobre mí</a></li>
                <li className='uk-button-text uk-width-small'><a href="#Habilidades"><span className="uk-margin-small-right" data-uk-icon="icon: bolt"></span> Habilidades</a></li>
                <li className='uk-button-text uk-width-small'><a href="#Trabajo"><span className="uk-margin-small-right" data-uk-icon="icon: pencil"></span> Trabajo</a></li>
                <li className='uk-button-text uk-width-small'><a href="#Contacto"><span className="uk-margin-small-right" data-uk-icon="icon: comment"></span> Contacto</a></li>

                <li className="uk-nav-divider uk-margin-top"></li>
                <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: mail"></span> Mail</a></li>
                <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: github"></span> Github</a></li>
                <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: facebook"></span> Facebook</a></li>
                <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: whatsapp"></span> WhatsApp</a></li>
            </ul>
        </div>
    </div>
</div>


export default Navbar;