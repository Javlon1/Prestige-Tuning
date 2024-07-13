import * as React from 'react'
import Head from 'next/head'
import Intro from '@/app/components/screens/home/Intro/Intro';
import Category from '@/app/components/screens/home/Category/Category';
import TopSell from '@/app/components/screens/home/TopSell/TopSell';
import Recommend from '@/app/components/screens/home/Recommend/Recommend';
import About from '@/app/components/screens/home/About/About';
import Contact from '@/app/components/screens/home/Contact/Contact';

const Index = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Prestige Tuning Andijondagi sifatli va tezkor tuning markazlaridan biri hisoblanadi. Markaz quyidagi sifatlari bilan boshqa tuning xizmatlaridan ajralib turadi: 10 yillik ish tajribasi Yiliga 10.000 dan ortiq mijozga xizmat ko’rsatadi Boshqa tuning xizmatlaridan bir necha marotaba tez va sifatli xizmat ko’rsatadi Malakali usta va ishchilar ishlaydi" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="Prestic tuning" /> // Название страницы
                <meta property="og:description" content="Prestige Tuning Andijondagi sifatli va tezkor tuning markazlaridan biri hisoblanadi. Markaz quyidagi sifatlari bilan boshqa tuning xizmatlaridan ajralib turadi: 10 yillik ish tajribasi Yiliga 10.000 dan ortiq mijozga xizmat ko’rsatadi Boshqa tuning xizmatlaridan bir necha marotaba tez va sifatli xizmat ko’rsatadi Malakali usta va ishchilar ishlaydi" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Prestic tuning" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

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
    )
}

export default Index;