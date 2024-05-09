// pages/_app.tsx

import '../styles/global.css';
import '../styles/index.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/propose.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
