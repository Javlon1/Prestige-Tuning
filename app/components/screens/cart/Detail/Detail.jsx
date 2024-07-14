import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Detail.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import img from "../../../../../public/img/slayd.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Scrollbar, A11y } from 'swiper/modules';
import Message from '@/app/components/ui/Message/Message';
import { useRouter } from 'next/router';

const data = [
    {
        id: 1,
        images: [
            {
                id: 1,
                image: img,
            },
            {
                id: 2,
                image: img,
            },
            {
                id: 3,
                image: img,
            },
            {
                id: 4,
                image: img,
            },
        ],
        title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
        price: 855000,
    },
]


const Detail = () => {
    const [dataRecommend] = React.useState(
        [
            {
                id: 1,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "1850000",
                image: img
            },
            {
                id: 2,
                title: "Роскошный комфорт",
                price: "2300000",
                image: img
            },
            {
                id: 3,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "3500000",
                image: img
            },
            {
                id: 4,
                title: "Рабочий стол руководителя",
                price: "1700000",
                image: img
            }
        ]
    )
    const router = useRouter();
    const { lan, cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [size] = React.useState({ en: 'Sizes', ru: 'Размеры', uz: "O'lchamlari" });
    const [frame] = React.useState({ en: 'Frame', ru: 'Каркас', uz: "Ramka" });
    const [material] = React.useState({ en: 'Material', ru: 'Материал', uz: "Material" });
    const [paintType] = React.useState({ en: 'Paint type', ru: 'Тип краски', uz: "Bo'yoq turi" });
    const [count] = React.useState({ en: 'Quantity', ru: 'Количество', uz: "Miqdori" });
    let [counter, setCounter] = React.useState(1)
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(0);

    const handleSlideChange = (swiper) => {
        setSelectedImage(swiper.activeIndex);
    };

    return (
        <section className={styles.detail}>
            <Message messages={messageText} type={messageType} />
            <MyContainer>
                <div className={styles.detail__items}>
                    <Link href={'/'}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>
                            Orqaga
                        </p>
                    </Link>
                    {
                        data?.map((item) => (
                            <div key={item.id} className={styles.detail__items__product}>

                                <div className={styles.left}>
                                    <div className={styles.left__img}>
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#959595',
                                            }}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                            onSlideChange={handleSlideChange}
                                        >
                                            {item.images?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <Image
                                                        src={item.image}
                                                        alt='product'
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    <div className={styles.left__list}>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={item.images.length > 4 ? 4 : item.images.length}
                                            // freeMode={true}
                                            // watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                        >
                                            {item.images?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className={`${styles.left__list__item} ${index === selectedImage ? styles.selected : ''}`}>
                                                        <Image
                                                            src={item.image}
                                                            alt='product'
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>

                                <div className={styles.right}>
                                    <b className={styles.right__title}>{item.title}</b>
                                    <p className={styles.right__price}>{item.price.toLocaleString("en-US").replace(/,/g, " ")} сум</p>
                                    <ul className={styles.right__list}>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{size[lan]}</p>
                                            </span>
                                            <p>{item.size}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{frame[lan]}</p>
                                            </span>
                                            <p>{item.frame}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{material[lan]}</p>
                                            </span>
                                            <p>{item.material}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{paintType[lan]}</p>
                                            </span>
                                            <p>{item.paintType}</p>
                                        </li>
                                    </ul>
                                    <div className={styles.right__items}>
                                        <label>
                                            <p>Miqdori</p>
                                            <div className={styles.right__items__counter}>
                                                <button onClick={() => { if (counter > 1) setCounter(counter -= 1) }}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <p>{counter}</p>
                                                <button onClick={() => setCounter(counter += 1)}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                        </label>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (!cart.some(cartItem => cartItem.id === item.id)) {
                                                setCart([...cart, { ...item, quantity: counter }]);
                                                setMessage(true);
                                                setMessageType('success');
                                                setMessageText("Mahsulot savatga qo'shildi");
                                            } else {
                                                setMessageText("Mahsulot savatga qo'shilgan");
                                                setMessage(true);
                                                setMessageType('warning');
                                            }
                                        }}
                                        className={styles.right__btn}
                                    >
                                        SAVATCHAGA QO'SHISH
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </MyContainer>
            <MyContainer>
                <div className={styles.detail__item}>
                    <div className={styles.detail__item__header}>
                        <div className={styles.detail__item__header__title}>
                            <p>
                                Ushbu turkumdagi mahsulotlar
                            </p>
                        </div>
                    </div>
                    <Swiper

                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__next}`,
                            nextEl: `.${styles.btn__prev}`,
                        }}
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
                            dataRecommend?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.detail__item__cart}>
                                        <div className={styles.detail__item__cart__item}>
                                            <div
                                                className={styles.detail__item__cart__item__img}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                    priority
                                                />
                                            </div>
                                            <b>{item.title}</b>
                                            <div className={styles.price}>
                                                <p>{parseInt(item.price).toLocaleString('en-US').replace(/,/g, ' ')}</p>
                                                <button onClick={() =>
                                                    router.push("/catalog-detail")
                                                }>
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

export default Detail;