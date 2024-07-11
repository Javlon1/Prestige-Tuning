import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slayd1 from '../../../../../public/img/me.jpg'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';


const Intro = () => {
    const { close } = React.useContext(Context);

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles['swiper-container']}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{
                            nextEl: `.${styles['swiper-button-next-custom']}`,
                            prevEl: `.${styles['swiper-button-prev-custom']}`
                        }}
                        pagination={{ clickable: true, el: `.${styles['swiper-pagination-custom']}` }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                                priority
                            />
                            {/* {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))} */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                                priority
                            />
                            {/* {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))} */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                                priority
                            />
                            {/* {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))} */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                                priority
                            />
                            {/* {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))} */}
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles['swiper-button-prev-custom']}>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className={styles['swiper-button-next-custom']}>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className={styles['swiper-pagination-custom']}></div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;