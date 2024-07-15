import * as React from 'react';
import Head from 'next/head';
import RegisterSuccess from '@/app/components/screens/cart/RegisterSuccess/RegisterSuccess';
import logo from '../public/img/logo.png';

const RegisterSuccessPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <title>Buyurtma berish</title>
            </Head>

            <main>
                <RegisterSuccess />
            </main>
        </>
    );
}

export default RegisterSuccessPage;
