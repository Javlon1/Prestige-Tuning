import * as React from 'react';
import Head from 'next/head';
import Catalog from '@/app/components/screens/catalog/Catalog';
import logo from '../public/img/logo.png';

const CatalogPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Bizning katalogimizda eng yaxshi avtomobil tuning mahsulotlari va xizmatlari." />
                <meta name="keywords" content="katalog, avtomobil tuning, Andijon, sifatli xizmat, tezkor xizmat, tuning mahsulotlari, tuning xizmatlari" />
                <meta name="image_src" content={logo.src} />

                <meta property="og:title" content="Katalog" />
                <meta property="og:description" content="Bizning katalogimizda eng yaxshi avtomobil tuning mahsulotlari va xizmatlari." />
                <meta property="og:image" content={logo.src} />
                <meta property="og:url" content="https://prestigetuning.uz/catalog" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestige Tuning" />
                <meta property="og:locale" content="ru_RU" />

                <title>Katalog</title>
            </Head>

            <main>
                <Catalog />
            </main>
        </>
    );
}

export default CatalogPage;
