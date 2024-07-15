import * as React from 'react';
import Head from 'next/head';
import AllIntro from '@/app/components/ui/AllIntro/AllIntro';
import Register from '@/app/components/screens/cart/Register/Register';
import logo from '../public/img/logo.png';

const RegisterPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Buyurtma berish</title>
            </Head>

            <main>
                <AllIntro text="Buyurtma berish" />
                <Register />
            </main>
        </>
    );
}

export default RegisterPage;
