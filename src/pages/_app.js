import { Fragment } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
