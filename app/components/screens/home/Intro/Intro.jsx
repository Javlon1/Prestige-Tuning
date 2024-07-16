import * as React from 'react';
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';


const Intro = () => {
    const { url, auth_token } = React.useContext(Context);
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        const fullUrl = `${url}/v1/homepage/banners/`;
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

    return (
        <section className={styles.intro}>
            <MyContainer>
                <h1>Prestic tuning</h1>
                <div className={styles['swiper-container']}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{
                            nextEl: `.${styles['swiper-button-next-custom']}`,
                            prevEl: `.${styles['swiper-button-prev-custom']}`
                        }}
                        pagination={{
                            clickable: true,
                            el: `.${styles['swiper-pagination-custom']}`,
                            renderBullet: function (index, className) {
                                return `<div class="${className} ${styles.paginationItem}"></div>`;
                            }
                        }}
                        loop={true}
                    >
                        {
                            data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.intro__item}>
                                        <div className={styles.intro__item__left}>
                                            <b className={styles.intro__item__left__title}>
                                                {item.name} <span>{item.ceiling}%</span>  gacha chegirma !
                                            </b>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className={styles.intro__item__right}>
                                            <Image
                                                width={500}
                                                height={500}
                                                src={item.image_url}
                                                alt='slayd'
                                                priority
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className={styles['swiper-button-prev-custom']}>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className={styles['swiper-button-next-custom']}>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className={styles['swiper-pagination-custom']} />
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;