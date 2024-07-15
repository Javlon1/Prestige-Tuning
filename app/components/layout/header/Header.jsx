import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Context } from '../../ui/Context/Context';
import logo from "../../../../public/img/logo.png"
import orginal from "../../../../public/img/orginal.png"
import dots from "../../../../public/img/dots.png"
import MyContainer from '../../ui/MyContainer/MyContainer';

const Header = () => {
    const { cart, setCart } = React.useContext(Context);
    const { pathname } = useRouter();
    const router = useRouter();
    const [headerData] = React.useState([
        {
            id: 1,
            link: '@prestigecartuning_x_admin (https://t.me/prestigecartuning_x_admin)',
            nav: "Tuning xizmatlari"
        },
        {
            id: 2,
            link: '/',
            nav: "Tuning tovarlari"
        },
        {
            id: 3,
            link: '#about',
            nav: "Biz haqimizda"
        },
        {
            id: 4,
            link: '#contact',
            nav: "Bog’lanish"
        },
    ]);

    const [ham, setham] = React.useState(false);
    const [catalog, setCatalog] = React.useState(false);



    return (
        <header className={styles.header} >

            <div
                className={`${styles.opacity} ${ham || catalog ? styles.opacityAct : ""}`}
                onClick={() => {
                    setham(false)
                    setCatalog(false)
                }}
            ></div>
            <div className={styles.header__items}>
                <MyContainer>
                    <div className={styles.header__items__top}>

                        <div className={styles.header__items__top__form}>

                            <div className={`${styles.header__items__top__form__hamburger} ${ham ? styles.hamAct : ""}`}
                                onClick={() => {
                                    setham(!ham)
                                    setCatalog(false)
                                }}
                            ></div>

                            <Link href={'/'} className={styles.header__items__top__form__logo}>
                                <Image
                                    src={logo}
                                    alt='logo'
                                />
                            </Link>
                            <div className={styles.header__items__top__form__search}>
                                <form className={styles.form}>
                                    <input
                                        type="text"
                                        placeholder='Tovar nomini kiriting'
                                    />
                                    <button className={styles.btn} type='submit'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.header__items__top__contact}>
                            <a href="tel:+998987000021">
                                <i className="fa-solid fa-phone-volume"></i>
                                +998 98 700 00 21
                            </a>
                            <a href="tel:+998987000021">
                                <i className="fa-solid fa-phone-volume"></i>
                                +998 98 700 00 21
                            </a>
                        </div>
                        <div className={styles.header__items__top__cart}>
                            <button
                                type='button'
                                onClick={() => router.push('/cart')}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>

                                {
                                    (cart.length > 0) && (
                                        <span>{cart.length}</span>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </MyContainer>
                <div className={styles.header__items__bottom}>
                    <MyContainer>
                        <div className={styles.header__items__bottom__items}>
                            <button
                                type='button'
                                onClick={() => {
                                    setCatalog(!catalog)
                                    setham(false)
                                }} className={`${styles.katalog} ${catalog ? styles.katalogAct : ""}`}>
                                <Image
                                    src={dots}
                                    width={20}
                                    height={20}
                                    alt='dots'
                                />
                                <p>
                                    Katalog
                                </p>
                            </button>
                            <ul className={`${styles.catalog} ${catalog ? styles.catalogAct : ""}`}>
                                <li className={styles.catalog__item}>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setCatalog(false)
                                            router.push('/catalog')
                                        }} >
                                        <Image
                                            src={orginal}
                                            width={20}
                                            height={20}
                                            alt='dots'
                                        />
                                        <p>
                                            Оригинальные запчасти
                                        </p>
                                    </button>
                                </li>
                            </ul>
                            <ul className={`${styles.list} ${ham ? styles.navActive : ""}`}>
                                {
                                    headerData?.map((item) => (
                                        <li onClick={() => setham(false)} key={item.id} className={styles.list__item}
                                        >
                                            {
                                                item.link === '@prestigecartuning_x_admin (https://t.me/prestigecartuning_x_admin)' ? (
                                                    <a
                                                        className={`${pathname === item.link ? styles.active : ""}`}
                                                        href="https://t.me/prestigecartuning_x_admin"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.nav}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={item.link}
                                                        className={`${pathname === item.link ? styles.active : ""}`}
                                                    >
                                                        {item.nav}
                                                    </Link>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                            <button
                                type='button'
                                className={styles.cart}
                                onClick={() => router.push('/cart')}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                Savatcha
                                {
                                    (cart.length > 0) && (
                                        <span>{cart.length}</span>
                                    )
                                }
                            </button>

                            <div className={styles.search}>
                                <form className={styles.form}>
                                    <input
                                        type="text"
                                        placeholder='Tovar nomini kiriting'
                                    />
                                    <button className={styles.btn} type='submit'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </MyContainer>
                </div>
            </div>
        </header>
    );
};

export default Header;