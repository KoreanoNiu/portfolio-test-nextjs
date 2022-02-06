import tutienda from '../../static/img/tutienda.webp';
import ecommerce from '../../static/img/ecommerce.webp';
import astraFit from '../../static/img/astrafit.webp';
import espacios from '../../static/img/espacios.webp';
import petCare from '../../static/img/petcare.webp';
import autocompletado from '../../static/img/administrador.webp';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Work = () =>
<div className='uk-container uk-container-large' id='Trabajo'>
    <h2 className='uk-heading uk-heading-large uk-text-center uk-margin-large-top'>Trabajo</h2>
    <LazyLoadComponent>
    <div className='uk-grid-medium uk-flex-center' data-uk-grid>
        <div className='uk-width-1-3@m'>
            <div
                className='uk-card uk-inline uk-height-large card-image'
                style={{backgroundImage: `url(${tutienda})`}}>
                    <div className='flex light'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Tu Tienda Zamora</h3>
                            <p>#NextJs #TypeScript #Sass #Uikit</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='uk-width-1-3@m'>
        <div
                className='uk-card uk-inline uk-height-large card-image uk-flex uk-flex-center uk-flex-bottom'
                style={{backgroundImage: `url(${ecommerce})`}}>
                    <div className='flex black'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Mercado Pago E-commerce</h3>
                            <p>#Php</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='uk-width-1-3@m'>
            <div
                className='uk-card uk-inline uk-height-large card-image uk-flex uk-flex-center uk-flex-bottom'
                style={{backgroundImage: `url(${astraFit})`}}>
                    <div className='flex light'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Tu Tienda Zamora</h3>
                            <p>#NextJs #TypeScript #Sass #Uikit</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='uk-width-1-3@m'>
        <div
                className='uk-card uk-inline uk-height-large card-image uk-flex uk-flex-center uk-flex-bottom'
                style={{backgroundImage: `url(${espacios})`}}>
                    <div className='flex black'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Tu Tienda Zamora</h3>
                            <p>#NextJs #TypeScript #Sass #Uikit</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='uk-width-1-3@m'>
        <div
                className='uk-card uk-inline uk-height-large card-image uk-flex uk-flex-center uk-flex-bottom'
                style={{backgroundImage: `url(${petCare})`}}>
                    <div className='flex light'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Tu Tienda Zamora</h3>
                            <p>#NextJs #TypeScript #Sass #Uikit</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='uk-width-1-3@m'>
        <div
                className='uk-card uk-inline uk-height-large card-image uk-flex uk-flex-center uk-flex-bottom'
                style={{backgroundImage: `url(${autocompletado})`}}>
                    <div className='flex black'>
                        <a className='button uk-link-reset'>
                            <span data-uk-icon='icon:arrow-right; ratio: 1.5'></span>
                            <p>IR</p>
                        </a>
                        <div className='contain'>
                            <h3>Tu Tienda Zamora</h3>
                            <p>#NextJs #TypeScript #Sass #Uikit</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </LazyLoadComponent>
</div>

export default Work;