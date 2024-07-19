import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Context } from '../../ui/Context/Context';
import logo from "../../../../public/img/logo.png"
import dots from "../../../../public/img/dots.png"
import MyContainer from '../../ui/MyContainer/MyContainer';

const Header = () => {
    const { url, auth_token, cart } = React.useContext(Context);
    const { pathname } = useRouter();
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        name: '',
    });
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
    const [data, setData] = React.useState([]);


    React.useEffect(() => {
        const fullUrl = `${url}/v1/homepage/category/`;
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${auth_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setData(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullUrl = `${url}/v1/products/search_products/?search=${formData.name}`;

        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
            });
            const data = await response.json();
            console.log(data.results[0]);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                setFormData({
                    name: '',
                })
                router.push({
                    pathname: '/catalog',
                    query: {
                        brand_id: data.results[0].brand,
                        car_model_id: data.results[0].car_model,
                        category_id: data.results[0].category,
                    }
                })
            }
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

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
                                    width={150}
                                    height={50}
                                />
                            </Link>
                            <div className={styles.header__items__top__form__search}>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <input
                                        type="text"
                                        placeholder="Tovar nomini kiriting"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <button className={styles.btn} type='submit'>
                                        <strong>qidirish</strong>
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
                                <strong>Savatcha</strong>
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
                                {
                                    data?.map((item) => (
                                        <li key={item.id} className={styles.catalog__item}>
                                            <button
                                                type='button'
                                                onClick={() => {
                                                    setCatalog(false)
                                                    router.push({
                                                        pathname: '/catalog',
                                                        query: {
                                                            category_id: item.id
                                                        }
                                                    })
                                                }} >
                                                <Image
                                                    src={item.category_image}
                                                    width={20}
                                                    height={20}
                                                    alt='dots'
                                                />
                                                <p>
                                                    {item.name}
                                                </p>
                                            </button>
                                        </li>
                                    ))
                                }
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
                                        <strong>qidirish</strong>
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