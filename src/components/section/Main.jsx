import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | Music Youtube"
                defaultTitle="Music Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <main id='main' role='main' className='container'>
                {props.children}
            </main>

        </HelmetProvider >
    )
}

export default Main
