import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Cart.module.scss';
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import Message from '@/app/components/ui/Message/Message';
import { useRouter } from 'next/router';

const Cart = () => {
    const router = useRouter();
    const { cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);

    // Обновлено название функции для очистки корзины
    const handleClearCart = () => {
        setCart([]);
    };

    const calculateTotalSum = () => {
        return cart.reduce((sum, item) => {
            const price = parseFloat(item.usd_price);
            const quantity = parseInt(item.quantity, 10);

            // Проверка на валидность данных
            if (isNaN(price) || isNaN(quantity)) {
                console.warn(`Invalid data for item with id ${item.id}: price = ${item.price}, quantity = ${item.quantity}`);
                return sum;
            }

            return sum + price * quantity;
        }, 0);
    };

    // Обновление количества товара в корзине
    const handleQuantityChange = (id, delta) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
        ));
    };

    const totalSum = calculateTotalSum();

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date().toISOString();
            const updatedCart = cart.filter(item => {
                const itemTime = new Date(item.addedAt);
                const timeDiff = (new Date(currentTime) - itemTime) / (1000 * 60 * 60 * 24);
                return timeDiff < 3;
            });
            setCart(updatedCart);
        }, 1000 * 60 * 60);

        return () => clearInterval(intervalId);
    }, [cart]);

    const timeLeft = (addedAt) => {
        const itemTime = new Date(addedAt);
        const timeDiff = (new Date() - itemTime) / (1000 * 60 * 60 * 24);
        return Math.max(0, 3 - timeDiff);
    };

    return (
        <section className={styles.cart}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.cart__item}>
                    <div className={styles.cart__item__left}>
                        <div className={styles.cart__item__left__content}>
                            <div className={styles.cart__item__left__content__header}>
                                <p>Savatchaga olingan tovarlar</p>
                                <button type='button' onClick={handleClearCart}>
                                    Savatchani tozalash <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                            <ul className={styles.cart__item__left__content__list}>
                                {
                                    cart.length > 0
                                        ? cart.map((item) => (
                                            <li className={styles.cart__item__left__content__list__item} key={item.id}>
                                                <div className={styles.title}>
                                                    <Image
                                                        src={item.images[0]?.image}
                                                        alt='product'
                                                        width={100}
                                                        height={90}
                                                    />
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className={styles.ost}>
                                                    <b className={styles.day}>{timeLeft(item.addedAt).toFixed()} kun</b>
                                                    <div className={styles.count}>
                                                        <div className={styles.count__btn}>
                                                            <button type='button' onClick={() => handleQuantityChange(item.id, -1)}>
                                                                <i className="fa-solid fa-minus"></i>
                                                            </button>
                                                            <span>{item.quantity}</span>
                                                            <button type='button' onClick={() => handleQuantityChange(item.id, 1)}>
                                                                <i className="fa-solid fa-plus"></i>
                                                            </button>
                                                        </div>
                                                        <p>1-ta = {parseFloat(item.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                                    </div>
                                                    <p>{parseFloat(item.usd_price * item.quantity).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                                    <button
                                                        type='button'
                                                        className={styles.btn}
                                                        onClick={() => {
                                                            setCart(cart.filter(cartItem => cartItem.id !== item.id));
                                                        }}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
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
                            <span>Tovarlar soni <b>{cart.length}</b></span>
                            <span>Jami narxi <b>{totalSum.toLocaleString('en-US').replace(/,/g, ' ')} $</b></span>
                            <button
                                type='button'
                                onClick={() => {
                                    if (cart.length > 0) {
                                        router.push('/register');
                                    } else {
                                        setMessageText("Savatchangiz bo'sh");
                                        setMessage(true);
                                        setMessageType('warning');
                                    }
                                }}
                                className={styles.btn}
                            >
                                Buyurtma berish
                            </button>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    );
};

export default Cart;