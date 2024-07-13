import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Recommend.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import slayd1 from '../../../../../public/img/slayd.png'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Message from '@/app/components/ui/Message/Message';

const Recommend = () => {
    const { cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [popularData] = React.useState([{ id: 1, nav_en: 'Popular products', nav_ru: 'Популярные товары', nav_uz: 'Ommabop tovarlar' }]);
    const [recommendData] = React.useState([{ id: 1, nav_en: 'We recommend', nav_ru: 'Мы рекомендуем', nav_uz: 'Biz tavsiya qilamiz' }]);
    const [byData] = React.useState([{ id: 1, nav_en: 'Buy', nav_ru: 'Купить', nav_uz: 'Sotib olish' }]);
    const [data] = React.useState(
        [
            {
                id: 1,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "1 850 000 сум",
                image: slayd1
            },
            {
                id: 2,
                title: "Роскошный комфорт",
                price: "2 300 000 сум",
                image: slayd1
            },
            {
                id: 3,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "3 500 000 сум",
                image: slayd1
            },
            {
                id: 4,
                title: "Рабочий стол руководителя",
                price: "1 700 000 сум",
                image: slayd1
            },
            {
                id: 5,
                title: "Эргономичное кресло",
                price: "1 200 000 сум",
                image: slayd1
            },
            {
                id: 6,
                title: "Хрустальная люстра",
                price: "2 000 000 сум",
                image: slayd1
            },
            {
                id: 7,
                title: "Деревянный шкаф",
                price: "2 800 000 сум",
                image: slayd1
            },
            {
                id: 8,
                title: "Кухонный остров",
                price: "3 200 000 сум",
                image: slayd1
            },
            {
                id: 9,
                title: "Развлекательный центр",
                price: "2 900 000 сум",
                image: slayd1
            },
            {
                id: 10,
                title: "Абстрактная картина",
                price: "1 100 000 сум",
                image: slayd1
            }
        ]
    )

    return (
        <section className={styles.products}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
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
                            data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.products__item__cart}>
                                        <div className={styles.products__item__cart__item}>
                                            <div
                                                className={styles.products__item__cart__item__img}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                    priority
                                                />
                                            </div>
                                            <b>{item.title}</b>
                                            <div className={styles.price}>
                                                <p>{item.price}</p>
                                                <button onClick={() => {
                                                    if (!cart.some(cartItem => cartItem.id === item.id)) {
                                                        setCart([...cart, item]);
                                                    } else {
                                                        setMessageText("Mahsulot savatga qo'shilgan")
                                                        setMessage(true)
                                                        setMessageType('warning')
                                                    }
                                                }}>
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

                <div className={`${styles.products__item} ${styles.qw}`}>
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
                            data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.products__item__cart}>
                                        <div className={styles.products__item__cart__item}>
                                            <div
                                                className={styles.products__item__cart__item__img}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                    priority
                                                />
                                            </div>
                                            <b>{item.title}</b>
                                            <div className={styles.price}>
                                                <p>{item.price}</p>
                                                <button onClick={() => {
                                                    if (!cart.some(cartItem => cartItem.id === item.id)) {
                                                        setCart([...cart, item]);
                                                    } else {
                                                        setMessageText("Mahsulot savatga qo'shilgan")
                                                        setMessage(true)
                                                        setMessageType('warning')
                                                    }
                                                }}>
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