import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Detail.module.scss';
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Scrollbar, A11y } from 'swiper/modules';
import Message from '@/app/components/ui/Message/Message';
import { useRouter } from 'next/router';

const Detail = () => {
    const [data, setData] = React.useState({});
    const [dataRecommend, setDataRecommend] = React.useState([]);
    const router = useRouter();
    const id = router.query;
    const { url, auth_token, cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    let [counter, setCounter] = React.useState(1);
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(0);

    const handleSlideChange = (swiper) => {
        setSelectedImage(swiper.activeIndex);
    };

    const handleAddToCart = (item, counter) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (!existingItem) {
            const newItem = { ...item, quantity: counter, addedAt: new Date().toISOString() };
            setCart([...cart, newItem]);
            setMessage(true);
            setMessageType('success');
            setMessageText("Mahsulot savatga qo'shildi");
        }
    };

    React.useEffect(() => {
        setCounter(1);
        const fullUrl = `${url}/v1/products/detail_products/?id=${id.product_id ? id.product_id : ''}`;
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
                    setData(data.product);
                    setDataRecommend(data.related_products);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [id]);

    const transformData = (item) => {
        if (typeof item !== 'object' || item === null) {
            console.error("Data is not a valid object");
            return null;
        }

        return {
            id: item.id,
            images: [
                { id: 1, image: item.image_1 },
                { id: 2, image: item.image_2 },
                { id: 3, image: item.image_3 },
                { id: 4, image: item.image_4 },
            ].filter(image => image.image !== null),
            title: item.name,
            uzs_price: item.uzs_price,
            usd_price: item.usd_price,
        };
    };

    const transformedData = transformData(data);

    return (
        <section className={styles.detail}>
            <Message messages={messageText} type={messageType} />
            <MyContainer>
                <div className={styles.detail__items}>
                    <Link href={'/catalog'}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>
                            Orqaga
                        </p>
                    </Link>
                    <div className={styles.detail__items__product}>
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
                                    {transformedData.images?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                width={300}
                                                height={300}
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
                                    slidesPerView={transformedData.images.length > 4 ? 4 : transformedData.images.length}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {transformedData.images?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={`${styles.left__list__item} ${index === selectedImage ? styles.selected : ''}`}>
                                                <Image
                                                    width={300}
                                                    height={300}
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
                            <b className={styles.right__title}>{transformedData.title}</b>
                            {
                                transformedData.uzs_price?.length <= 9 ? (
                                    <p className={styles.right__price}>{parseInt(transformedData.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</p>
                                ) : (
                                    <p className={styles.right__price}>{parseInt(transformedData.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                )
                            }
                            <ul className={styles.right__list}>
                                {
                                    (data.brand?.id) && (
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>Brendi</p>
                                            </span>
                                            <p>{data.brand?.name}</p>
                                        </li>
                                    )
                                }
                                {
                                    (data.car_model?.id) && (
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>Avtomobil rusumi</p>
                                            </span>
                                            <p>{data.car_model?.name}</p>
                                        </li>
                                    )
                                }
                                <li className={styles.right__list__item}>
                                    <span>
                                        <p>Kategoriyasi</p>
                                    </span>
                                    <p>{data.category?.name}</p>
                                </li>
                            </ul>
                            {
                                (!cart.some(cartItem => cartItem.id === transformedData.id)) && (
                                    <div className={styles.right__items}>
                                        <label>
                                            <p>Miqdori</p>
                                            <div className={styles.right__items__counter}>
                                                <button type='button' onClick={() => { if (counter > 1) setCounter(counter - 1) }}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <p>{counter}</p>
                                                <button type='button' onClick={() => setCounter(counter + 1)}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                        </label>
                                    </div>
                                )
                            }
                            <button
                                type='button'
                                onClick={() => { handleAddToCart(transformedData, counter) }}
                                className={`${styles.right__btn} ${cart.some(cartItem => cartItem.id === transformedData.id) ? styles.btnActive : ''}`}
                            >
                                SAVATCHAGA QO'SHISH
                            </button>
                        </div>
                    </div>
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
                                                <button type='button' onClick={() =>
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
    );
};

export default Detail;
