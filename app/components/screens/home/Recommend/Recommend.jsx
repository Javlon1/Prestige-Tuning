import * as React from 'react';
import Image from 'next/image'
import styles from './Recommend.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/router';

const Recommend = () => {
    const router = useRouter();
    const { url, auth_token } = React.useContext(Context);
    const [loader, setLoader] = React.useState(true)
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        const fullUrl = `${url}/v1/homepage/recommendedproducts/`;
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
                    setLoader(false);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <section className={styles.products}>
            <MyContainer>
                <div className={styles.products__item}>
                    <div className={styles.products__item__header}>
                        <div className={styles.products__item__header__title}>
                            <p>
                                Tavsiya qilamiz
                            </p>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className={styles.products__item__header__btns}>
                            <div className={styles.btn__next}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className={styles.btn__prev}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper

                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__next}`,
                            nextEl: `.${styles.btn__prev}`,
                        }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            loader ? <p>Loading...</p> :
                                data.recommended_products?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className={styles.products__item__cart}>
                                            <div className={styles.products__item__cart__item}>
                                                <div
                                                    onClick={() =>
                                                        router.push({
                                                            pathname: '/catalog-detail',
                                                            query: {
                                                                product_id: item.id
                                                            }
                                                        })
                                                    }
                                                    className={styles.products__item__cart__item__img}
                                                >
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={item.image_1}
                                                        alt='slayd'
                                                        priority
                                                    />
                                                </div>
                                                <b
                                                    onClick={() =>
                                                        router.push({
                                                            pathname: '/catalog-detail',
                                                            query: {
                                                                product_id: item.id
                                                            }
                                                        })
                                                    }
                                                >{item.name}</b>
                                                <div className={styles.price}>
                                                    {
                                                        item.uzs_price.length <= 9 ? (
                                                            <p>{parseInt(item.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</p>
                                                        ) : (
                                                            <p>{parseInt(item.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                                        )
                                                    }
                                                    <button
                                                        style={{ fontSize: '1rem' }}
                                                        type='button'
                                                        onClick={() =>
                                                            router.push({
                                                                pathname: '/catalog-detail',
                                                                query: {
                                                                    product_id: item.id
                                                                }
                                                            })
                                                        }
                                                    >
                                                        <strong>Savatga qo'shish</strong>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>
                </div>
                <div className={styles.products__item}>
                    <div className={styles.products__item__header}>
                        <div className={styles.products__item__header__title}>
                            <p>
                                Yangi tovarlar
                            </p>
                            <i className="fa-regular fa-thumbs-up"></i>
                        </div>
                        <div className={styles.products__item__header__btns}>
                            <div className={styles.btn__next2}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className={styles.btn__prev2}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper

                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__next2}`,
                            nextEl: `.${styles.btn__prev2}`,
                        }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            loader ? <p>Loading...</p> :
                                data.new_products?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className={styles.products__item__cart}>
                                            <div className={styles.products__item__cart__item}>
                                                <div
                                                    onClick={() =>
                                                        router.push({
                                                            pathname: '/catalog-detail',
                                                            query: {
                                                                product_id: item.id
                                                            }
                                                        })
                                                    }
                                                    className={styles.products__item__cart__item__img}
                                                >
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={item.image_1}
                                                        alt='slayd'
                                                        priority
                                                    />
                                                </div>
                                                <b
                                                    onClick={() =>
                                                        router.push({
                                                            pathname: '/catalog-detail',
                                                            query: {
                                                                product_id: item.id
                                                            }
                                                        })
                                                    }
                                                >{item.name}</b>
                                                <div className={styles.price}>
                                                    {
                                                        item.uzs_price.length <= 9 ? (
                                                            <p>{parseInt(item.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</p>
                                                        ) : (
                                                            <p>{parseInt(item.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                                        )
                                                    }
                                                    <button
                                                        style={{ fontSize: '1rem' }}
                                                        type='button'
                                                        onClick={() =>
                                                            router.push({
                                                                pathname: '/catalog-detail',
                                                                query: {
                                                                    product_id: item.id
                                                                }
                                                            })
                                                        }>
                                                        <strong>Savatga qo'shish</strong>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>
                </div>
            </MyContainer>
        </section>
    )
}

export default Recommend;