import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';

interface Props {
    children: ReactNode;
    title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title }) => {
    
    const headTitle = `Pokemon App - ${ title ?? 'Not Found Page' }`;
    const ogTitle = `Informacion sobre ${title}`;
    const ogDescription = `Esta es la pagina sobre ${title}`;
    const ogImage = `${origin}/img/banner.png`;

    return (
        <>
            <Head>
                <title>{ headTitle }</title>
                <meta name='author' content='Junior Gervacio' />
                <meta name='description' content={`pokemon info`} />
                <meta name='keywords' content={`pokemon, pokedex`} />

                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
            </Head>

            <Navbar />

            <main style={{
                padding: "0px 20px"
            }}>
                { children }
            </main>
        </>
    );
};
