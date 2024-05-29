import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | 치킨 브랜드"
                defaultTitle="치킨 브랜드모음"
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
