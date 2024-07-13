import * as React from 'react'
import Head from 'next/head'
import AllIntro from '@/app/components/ui/AllIntro/AllIntro';
import Register from '@/app/components/screens/cart/Register/Register';

const RegisterPage = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="Buyurtma berish" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Buyurtma berish</title>
            </Head>

            <main>
                <AllIntro text="Buyurtma berish" />
                <Register />
            </main>
        </>
    )
}

export default RegisterPage;