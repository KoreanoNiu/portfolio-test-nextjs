import dynamic from 'next/dynamic';
import Head from 'next/head';

const Video = dynamic(() => import('../components/Video/Video'), {ssr: false});
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {ssr: false});
const AboutMe = dynamic(() => import('../components/AboutMe/AboutMe'), {ssr: false});
const Habilities = dynamic(() => import('../components/Habilities/Habilities'), {ssr: false});
const Work = dynamic(() => import('../components/Work/Work'), {ssr: false});
const Contact = dynamic(() => import('../components/Contact/Contact'), {ssr: false});

const myApp = () =>
    <div>
        <Head>
            <title>PORTAFOLIO | CARLOS LIRA</title>
            <meta
              name="description"
              content="DESARROLLADOR WEB CARLOS HUMBERTO GARCÍA LIRA"
            />
            <meta property='og:title' content='DESARROLLADOR WEB CARLOS HUMBERTO GARCÍA LIRA'/>
            <meta property='og:description' content='¡Hola! mi nombre es Carlos, soy un Desarrollador web, entusiasta y encantado por la programación y la música. Actualmente estoy disponible para trabajar de manera remota, o presencial en la ciudad de Zamora, Michoacán. Si tienes un proyecto que deseas comenzar o consideras que necesitas de mis servicios, ponte en contacto.'/>
            <meta property='og:image' content='https://carloslira.ga/static/img/carlosliraL.webp'/>
            <meta property='og:image:secure_url' content='https://carloslira.ga/static/img/carlosliraL.webp'/>
            <meta property='og:image' content='https://carloslira.ga/static/img/carloslira.webp'/>
            <meta property='og:image:secure_rul' content='https://carloslira.ga/static/img/carloslira.webp'/>
            <meta property='og:image:type' content='image/jpeg'/>
            <meta name='theme-color' content='#FDFDFE'/>
            <link rel="shortcut icon" href="/static/logo.ico" sizes="256x256"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Video/>
        <div id='SobreMi'></div>
        <Navbar/>
        <div className='uk-section'>
            <AboutMe/>
            <Habilities/>
            <Work/>
            <Contact/>
        </div>
    </div>

export default myApp;