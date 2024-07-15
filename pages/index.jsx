import * as React from 'react';
import Head from 'next/head';
import Intro from '@/app/components/screens/home/Intro/Intro';
import Category from '@/app/components/screens/home/Category/Category';
import TopSell from '@/app/components/screens/home/TopSell/TopSell';
import Recommend from '@/app/components/screens/home/Recommend/Recommend';
import About from '@/app/components/screens/home/About/About';
import Contact from '@/app/components/screens/home/Contact/Contact';
import logo from '../public/img/logo-footer.png';

const Index = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Prestige Tuning Andijondagi sifatli va tezkor tuning markazlaridan biri hisoblanadi. Markaz quyidagi sifatlari bilan boshqa tuning xizmatlaridan ajralib turadi: 10 yillik ish tajribasi Yiliga 10.000 dan ortiq mijozga xizmat ko’rsatadi Boshqa tuning xizmatlaridan bir necha marotaba tez va sifatli xizmat ko’rsatadi Malakali usta va ishchilar ishlaydi" />
                <meta name="keywords" content="tuning, avtomobil tuning, Andijon, sifatli xizmat, tezkor xizmat, avtomobil sozlash, unumdorlikni oshirish, transport vositasini o'zgartirish, dvigatel tuning, tashqi ko'rinishni sozlash, ichki ko'rinishni sozlash, professional tuning, avtomobil yangilanishi, Andijon avtomobil xizmatlari, avtomobil ta'miri, ekspert tuning, maxsus avtomobil ishlari, avtomobil unumdorligi, yuqori sifatli tuning, tezkor xizmat, tajribali mutaxassislar" />
                <meta name="image_src" content={logo.src} />

                <meta property="og:title" content="Prestige Tuning" />
                <meta property="og:description" content="Prestige Tuning Andijondagi sifatli va tezkor tuning markazlaridan biri hisoblanadi. Markaz quyidagi sifatlari bilan boshqa tuning xizmatlaridan ajralib turadi: 10 yillik ish tajribasi Yiliga 10.000 dan ortiq mijozga xizmat ko’rsatadi Boshqa tuning xizmatlaridan bir necha marotaba tez va sifatli xizmat ko’rsatadi Malakali usta va ishchilar ishlaydi" />
                <meta property="og:image" content={logo.src} />
                <meta property="og:url" content="https://prestigetuning.uz/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestige Tuning" />
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://prestigetuning.uz/" />

                <title>Prestige Tuning</title>
            </Head>

            <main>
                <Intro />
                <Category />
                <TopSell />
                <Recommend />
                <About />
                <Contact />
            </main>
        </>
    );
}

export default Index;
