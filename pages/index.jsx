import * as React from 'react';
import Head from 'next/head';
import Intro from '@/app/components/screens/home/Intro/Intro';
import Category from '@/app/components/screens/home/Category/Category';
import TopSell from '@/app/components/screens/home/TopSell/TopSell';
import Recommend from '@/app/components/screens/home/Recommend/Recommend';
import About from '@/app/components/screens/home/About/About';
import Contact from '@/app/components/screens/home/Contact/Contact';
import logo from '../public/img/logo.png';

const Index = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Prestige Tuning - Andijondagi sifatli va tezkor avtomobil tuning markazi. Bizning kompaniya avtomobillar tuningi va ta'miri sohasida 10 yillik tajribaga ega va har yil 10,000 dan ortiq mijozga xizmat ko'rsatadi. Bizning mutaxassislar sizning avtomobilingizni sifatli va tez ravishda tuning qilishdi." />
                <meta name="keywords" content="tuning, avtomobil tuning, Andijon, sifatli xizmat, tezkor xizmat, avtomobil sozlash, unumdorlikni oshirish, transport vositasini o'zgartirish, dvigatel tuning, tashqi ko'rinishni sozlash, ichki ko'rinishni sozlash, professional tuning, avtomobil yangilanishi, Andijon avtomobil xizmatlari, avtomobil ta'miri, ekspert tuning, maxsus avtomobil ishlari, avtomobil unumdorligi, yuqori sifatli tuning, tezkor xizmat, tajribali mutaxassislar" />
                <meta name="image_src" content={logo} />

                <meta property="og:title" content="Prestic tuning" />
                <meta property="og:description" content="Prestige Tuning - Andijondagi sifatli va tezkor avtomobil tuning markazi. Bizning kompaniya avtomobillar tuningi va ta'miri sohasida 10 yillik tajribaga ega va har yil 10,000 dan ortiq mijozga xizmat ko'rsatadi. Bizning mutaxassislar sizning avtomobilingizni sifatli va tez ravishda tuning qilishdi." />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://prestigetuning.uz/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestic tuning" />
                <meta property="og:locale" content="ru_RU" />

                <link rel="canonical" href="https://prestigetuning.uz/" />
                
                <title>Prestic tuning</title>
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
