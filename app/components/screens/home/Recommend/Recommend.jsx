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

const Recommend = () => {
    const { lan } = React.useContext(Context);
    const [popularData] = React.useState([{ id: 1, nav_en: 'Popular products', nav_ru: 'Популярные товары', nav_uz: 'Ommabop tovarlar' }]);
    const [recommendData] = React.useState([{ id: 1, nav_en: 'We recommend', nav_ru: 'Мы рекомендуем', nav_uz: 'Biz tavsiya qilamiz' }]);
    const [byData] = React.useState([{ id: 1, nav_en: 'Buy', nav_ru: 'Купить', nav_uz: 'Sotib olish' }]);
    const [data] = React.useState(
        [
            {
                id: 1,
                category_ru: "Столы и стулья",
                category_en: "Tables and Chairs",
                category_uz: "Stollar va stullar",
                name_ru: "Современная элегантность",
                name_en: "Modern Elegance",
                name_uz: "Zamonaviy nafislik",
                price: "1 850 000 сум",
                image: slayd1
            },
            {
                id: 2,
                category_ru: "Мягкая мебель",
                category_en: "Soft Furniture",
                category_uz: "Yumshoq mebel",
                name_ru: "Роскошный комфорт",
                name_en: "Luxury Comfort",
                name_uz: "Hashamatli qulaylik",
                price: "2 300 000 сум",
                image: slayd1
            },
            {
                id: 3,
                category_ru: "Кровати и матрасы",
                category_en: "Beds and Mattresses",
                category_uz: "Krovatlar va matraslar",
                name_ru: "Королевский сон",
                name_en: "Royal Sleep",
                name_uz: "Qirollik uxlashi",
                price: "3 500 000 сум",
                image: slayd1
            },
            {
                id: 4,
                category_ru: "Письменные столы",
                category_en: "Desks",
                category_uz: "Yozuv stollari",
                name_ru: "Рабочий стол руководителя",
                name_en: "Executive Desk",
                name_uz: "Rahbar stoli",
                price: "1 700 000 сум",
                image: slayd1
            },
            {
                id: 5,
                category_ru: "Офисные кресла",
                category_en: "Office Chairs",
                category_uz: "Ofis stullari",
                name_ru: "Эргономичное кресло",
                name_en: "ErgoChair",
                name_uz: "Ergonomik stul",
                price: "1 200 000 сум",
                image: slayd1
            },
            {
                id: 6,
                category_ru: "Освещение",
                category_en: "Lighting",
                category_uz: "Yoritish",
                name_ru: "Хрустальная люстра",
                name_en: "Crystal Chandelier",
                name_uz: "Billur qandil",
                price: "2 000 000 сум",
                image: slayd1
            },
            {
                id: 7,
                category_ru: "Шкафы",
                category_en: "Wardrobes",
                category_uz: "Javonlar",
                name_ru: "Деревянный шкаф",
                name_en: "Wooden Wardrobe",
                name_uz: "Yog'och shkafi",
                price: "2 800 000 сум",
                image: slayd1
            },
            {
                id: 8,
                category_ru: "Кухонная мебель",
                category_en: "Kitchen Furniture",
                category_uz: "Oshxona mebellari",
                name_ru: "Кухонный остров",
                name_en: "Kitchen Island",
                name_uz: "Oshxona oroli",
                price: "3 200 000 сум",
                image: slayd1
            },
            {
                id: 9,
                category_ru: "Гостиная мебель",
                category_en: "Living Room Furniture",
                category_uz: "Mehmonxona mebellari",
                name_ru: "Развлекательный центр",
                name_en: "Entertainment Center",
                name_uz: "Ko'ngilochar markaz",
                price: "2 900 000 сум",
                image: slayd1
            },
            {
                id: 10,
                category_ru: "Декор",
                category_en: "Decor",
                category_uz: "Dekor",
                name_ru: "Абстрактная картина",
                name_en: "Abstract Painting",
                name_uz: "Mavhum rasm",
                price: "1 100 000 сум",
                image: slayd1
            }
        ]
    )
    return (
        <section className={styles.products}>
            <MyContainer>
                <div className={styles.products__item}>
                    <div className={styles.products__item__header}>
                        <div data-aos="fade-up" className={styles.products__item__header__title}>
                            {
                                popularData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className={styles.products__item__header__btns}>
                            <div data-aos="fade-up" className={styles.btn__next}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div data-aos="fade-up" className={styles.btn__prev}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
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
                                            <Link
                                                className={styles.products__item__cart__item__img}
                                                href={'/'}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                    priority
                                                />
                                            </Link>
                                            <b>{item[`name_${lan}`]}</b>
                                            <p>{item[`category_${lan}`]}</p>
                                            <p>{item.price}</p>
                                            {
                                                byData?.map((item) => (
                                                    <Link
                                                        className={styles.products__item__cart__item__link}
                                                        href={'/'}
                                                        key={item.id}
                                                    >
                                                        {item[`nav_${lan}`]}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className={`${styles.products__item} ${styles.qw}`}>
                    <div className={styles.products__item__header}>
                        <div data-aos="fade-up" className={styles.products__item__header__title}>
                            {
                                recommendData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <i className="fa-regular fa-thumbs-up"></i>
                        </div>
                        <div className={styles.products__item__header__btns}>
                            <div data-aos="fade-up" className={styles.btn__next2}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div data-aos="fade-up" className={styles.btn__prev2}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
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
                                            <Link
                                                className={styles.products__item__cart__item__img}
                                                href={'/'}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                />
                                            </Link>
                                            <b>{item[`name_${lan}`]}</b>
                                            <p>{item[`category_${lan}`]}</p>
                                            <p>{item.price}</p>
                                            {
                                                byData?.map((item) => (
                                                    <Link
                                                        className={styles.products__item__cart__item__link}
                                                        href={'/'}
                                                        key={item.id}
                                                    >
                                                        {item[`nav_${lan}`]}
                                                    </Link>
                                                ))
                                            }
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