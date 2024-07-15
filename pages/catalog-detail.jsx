import * as React from 'react';
import Head from 'next/head';
import Detail from '@/app/components/screens/cart/Detail/Detail';
import logo from '../public/img/logo.png';

const CatalogDetail = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Katalog Tafsilotlari</title>
            </Head>

            <main>
                <Detail />
            </main>
        </>
    );
}

export default CatalogDetail;
