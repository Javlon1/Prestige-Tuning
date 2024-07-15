import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './TopSell.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import slayd1 from '../../../../../public/img/slayd.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Message from '@/app/components/ui/Message/Message';
import { useRouter } from 'next/router';

const TopSell = () => {
    const router = useRouter();
    const { cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);

    const [data] = React.useState(
        [
            {
                id: 1,
                title: "Malibu rul SUPER 3000 X1 5W-40",
                price: "1850000",
                image: slayd1
            },
            {
                id: 2,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "2300000",
                image: slayd1
            },
            {
                id: 3,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "3500000",
                image: slayd1
            },
            {
                id: 4,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "1700000",
                image: slayd1
            }
        ]
    )

    return (
        <section className={styles.topSell}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.topSell__item}>
                    <div className={styles.topSell__item__top}>
                        <div className={styles.topSell__item__top__title}>
                            <p>Ko’p sotilayotgan tovarlar</p>

                            <i className="fa-regular fa-star"></i>
                        </div>
                        <Link href={'/catalog'}>
                            Barchasi
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                    <div className={styles.topSell__item__bottom}>
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={4}
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
                            <SwiperSlide>
                                <div className={styles.topSell__item__bottom__obj}>
                                    <div className={styles.topSell__item__bottom__obj__item}>
                                        <b className={styles.title}>Gentra OPTRA faralar sotuvda !</b>
                                        <Image
                                            src={slayd1}
                                            alt='slayd'
                                            priority
                                        />
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {
                                data?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className={styles.topSell__item__bottom__cart}>
                                            <div className={styles.topSell__item__bottom__cart__item}>
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                    priority
                                                />

                                                <b className={styles.title}>{item.title}</b> 
                                                <div className={styles.item}>
                                                    <p>{parseInt(item.price).toLocaleString('en-US').replace(/,/g, ' ')}</p>
                                                    <span onClick={() => {
                                                        router.push('/catalog-detail');
                                                    }}>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className={styles.topSell__sale}>
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
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.topSell__sale__item}>
                                        <div className={styles.title}>
                                            <b>Gentra OPTRA faralar sotuvda !</b>
                                            <button type='button'>
                                                Tanlash
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </button>
                                        </div>
                                        <Image
                                            src={slayd1}
                                            alt='slayd'
                                            priority
                                        />
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

export default TopSell;