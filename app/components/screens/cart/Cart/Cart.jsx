import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Cart.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Cart = () => {
    const { cart, setCart } = React.useContext(Context);

    const hanndlerDelCart = () => {
        setCart([])
    }

    console.log(cart);
    return (
        <section className={styles.cart}>
            <MyContainer>
                <div className={styles.cart__item}>
                    <div className={styles.cart__item__left}>
                        <div className={styles.cart__item__left__content}>
                            <div className={styles.cart__item__left__content__header}>
                                <p>Savatchaga olingan tovarlar</p>
                                <button onClick={() => hanndlerDelCart()}>Savatchani tozalash <i className="fa-solid fa-trash-can"></i></button>
                            </div>
                            <ul className={styles.cart__item__left__content__list}>
                                {
                                    cart.length > 0
                                        ? cart.map((item) => (
                                            <li className={styles.cart__item__left__content__list__item} key={item.id}>
                                                <div className={styles.title}>
                                                    <input type="checkbox" name="" id="" />
                                                    <Image
                                                        src={item.image}
                                                        alt='slayd1'
                                                        width={100}
                                                        height={90}
                                                    />
                                                    <p>{item.title}</p>
                                                </div>
                                                <b>5 kun</b>
                                                <div className={styles.count}>
                                                    <button>
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>
                                                    <span>1</span>
                                                    <button>
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                                <p>{item.price}</p>
                                                <button>
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </li>
                                        ))
                                        : <p className={styles.empty}>Savatchangiz bo’sh</p>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={styles.cart__item__right}>
                        <div className={styles.cart__item__right__content}>
                            <h3>Buyurtmangiz</h3>
                            <span>Tovarlar <b>{cart.length}</b></span>
                            <span>Jami <b>{cart.length}</b></span>
                            <button>Buyurtma berish</button>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Cart;