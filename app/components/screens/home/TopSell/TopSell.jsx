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

const TopSell = () => {
    const { lan } = React.useContext(Context);

    const [data] = React.useState(
        [
            {
                id: 1,
                category: "Malibu rul SUPER 3000 X1 5W-40",
                price: "1 850 000 сум",
                image: slayd1
            },
            {
                id: 2,
                category: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "2 300 000 сум",
                image: slayd1
            },
            {
                id: 3,
                category: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "3 500 000 сум",
                image: slayd1
            },
            {
                id: 4,
                category: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "1 700 000 сум",
                image: slayd1
            }
        ]
    )

    return (
        <section className={styles.topSell}>
            <MyContainer>
                <div className={styles.topSell__item}>
                    <div className={styles.topSell__item__top}>
                        <h3>Ko’p sotilayotgan tovarlar</h3>
                        <Link href={'/'}>
                            Barchasi
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                    <ul className={styles.topSell__item__bottom}>
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
                            <SwiperSlide>
                                <div className={styles.topSell__item__bottom__obj}>
                                    <div className={styles.topSell__item__bottom__obj__item}>
                                        <b className={styles.title}>Gentra OPTRA faralar sotuvda !</b>
                                        <Image
                                            src={slayd1}
                                            alt='slayd'
                                            priority
                                        />
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

                                                <b className={styles.title}>{item.category}</b>
                                                <div className={styles.item}>
                                                    <p>{item.price}</p>
                                                    <span>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </ul>
                </div>
            </MyContainer>
        </section>
    )
}

export default TopSell;