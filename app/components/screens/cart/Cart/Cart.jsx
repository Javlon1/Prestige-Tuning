import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Cart.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Cart = () => {
    const { cart } = React.useContext(Context);

    return (
        <section className={styles.cart}>
            <MyContainer>
                <div className={styles.cart__item}>
                    <div className={styles.cart__item__left}></div>
                    <div className={styles.cart__item__right}>
                        <div className={styles.cart__item__right__content}>
                            
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Cart;