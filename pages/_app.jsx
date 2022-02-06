import '../styles/uikit.scss';
import dynamic from 'next/dynamic';
const UIKit = dynamic(() => import('../components/Uikit'), {ssr: false });

function App({ Component, pageProps }) {
    return (
        <UIKit>
            <main>
                <Component {...pageProps} />
            </main>
        </UIKit>
    )
}
export default App
