import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './TopSell.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
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
    const [loader, setLoader] = React.useState(true)

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
                    {

                        loader ?
                            <div className={styles.loader}>
                                <div className={styles.loader__ring}></div>
                                <div className={styles.loader__ring}></div>
                                <div className={styles.loader__ring}></div>
                                <div className={styles.loader__ring}></div>
                            </div> :
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
                                        200: {
                                            slidesPerView: 1,
                                        },
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
                                            <div onClick={() =>
                                                router.push({
                                                    pathname: '/catalog-detail',
                                                    query: {
                                                        product_id: data.most_sold_product?.id
                                                    }
                                                })}
                                                className={styles.topSell__item__bottom__obj__item}>
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    src={data.most_sold_product?.image_1}
                                                    alt='slayd'
                                                    priority
                                                />
                                                <b className={styles.title}>{data.most_sold_product?.name}</b>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {
                                        data.top_selling_products?.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className={styles.topSell__item__bottom__cart}>
                                                    <div className={styles.topSell__item__bottom__cart__item}>
                                                        <div
                                                            onClick={() =>
                                                                router.push({
                                                                    pathname: '/catalog-detail',
                                                                    query: {
                                                                        product_id: item.id
                                                                    }
                                                                })}
                                                        >
                                                            <Image
                                                                width={300}
                                                                height={300}
                                                                src={item.image_1}
                                                                alt='slayd'
                                                                priority
                                                            />
                                                        </div>
                                                        <b onClick={() =>
                                                            router.push({
                                                                pathname: '/catalog-detail',
                                                                query: {
                                                                    product_id: item.id
                                                                }
                                                            })}
                                                            className={styles.title}>{item.name}</b>
                                                        <div className={styles.item}>
                                                            <div className={styles.sell_count}>
                                                                {
                                                                    item.uzs_price.length <= 9 ? (
                                                                        <b>{parseInt(item.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</b>
                                                                    ) : (
                                                                        <b>{parseInt(item.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</b>
                                                                    )
                                                                }
                                                            </div>
                                                            <span onClick={() => {
                                                                router.push({
                                                                    pathname: '/catalog-detail',
                                                                    query: {
                                                                        product_id: item.id
                                                                    }
                                                                })
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
                    }
                </div>
                <div className={styles.topSell__sale}>
                    {

                        loader ?
                            <div className={styles.loader}>
                                <div className={styles.loader__item}></div>
                                <div className={styles.loader__item}></div>
                                <div className={styles.loader__item}></div>
                            </div> :
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
                                    data.new_products_categories?.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className={styles.topSell__sale__item}>
                                                <div className={styles.title}>
                                                    <b>{item.name} uchun yangi tovarlar !</b>
                                                    <button
                                                        onClick={() =>
                                                            router.push({
                                                                pathname: '/catalog',
                                                                query: {
                                                                    category_id: item.id
                                                                }
                                                            })}
                                                        type='button'>
                                                        Tanlash
                                                        <i className="fa-solid fa-arrow-right-long"></i>
                                                    </button>
                                                </div>
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    src={item.category_image}
                                                    alt='slayd'
                                                    priority
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default TopSell;