import * as React from 'react'
import Head from 'next/head'
import AllIntro from '@/app/components/ui/AllIntro/AllIntro';
import Cart from '@/app/components/screens/cart/Cart/Cart';

const CartPage = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <title>Savatcha</title>
            </Head>

            <main>
                <AllIntro text="Savatcha" />
                <Cart />
            </main>
        </>
    )
}

export default CartPage;