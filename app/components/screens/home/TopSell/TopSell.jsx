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
    const { url, auth_token, messageType, messageText } = React.useContext(Context);
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        const fullUrl = `${url}/v1/homepage/topsellingproducts/`;
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

    console.log(data);

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
                            slidesPerView={data.top_selling_products?.length === 3 ? 4 : data.top_selling_products?.length + 1}
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
                                    slidesPerView: (data.top_selling_products?.length === 3 ? 4 : data.top_selling_products?.length + 1),
                                },
                            }}
                        >
                            {
                                data.most_sold_product?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.topSell__item__bottom__obj}>
                                            <div onClick={() => router.push('/catalog-detail')} className={styles.topSell__item__bottom__obj__item}>
                                                <b className={styles.title}>{item.name}</b>
                                                <Image
                                                    src={item.image_1}
                                                    alt='slayd'
                                                    priority
                                                />
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            {
                                data.top_selling_products?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.topSell__item__bottom__cart}>
                                            <div className={styles.topSell__item__bottom__cart__item}>
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    src={item.image_1}
                                                    alt='slayd'
                                                    priority
                                                />
                                                <b onClick={() => router.push('/catalog-detail')} className={styles.title}>{item.name}</b>
                                                <div className={styles.item}>
                                                    <div className={styles.sell_count}>
                                                        {
                                                            (item.ceiling_price > 0) && (
                                                                <p>{parseInt(item.ceiling_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</p>
                                                            )
                                                        }
                                                        <b className={`${item.ceiling_price > 0 ? styles.sell_count__active : ''}`}>{parseInt(item.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</b>
                                                    </div>
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
                            // data?.map((item) => (
                            //     <SwiperSlide key={item.id}>
                            //         <div className={styles.topSell__sale__item}>
                            //             <div className={styles.title}>
                            //                 <b>Gentra OPTRA faralar sotuvda !</b>
                            //                 <button type='button'>
                            //                     Tanlash
                            //                     <i className="fa-solid fa-arrow-right-long"></i>
                            //                 </button>
                            //             </div>
                            //             <Image
                            //                 src={slayd1}
                            //                 alt='slayd'
                            //                 priority
                            //             />
                            //         </div>
                            //     </SwiperSlide>
                            // ))
                        }
                    </Swiper>
                </div>
            </MyContainer>
        </section>
    )
}

export default TopSell;