import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Catalog.module.scss'
import Select from "react-select";
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useRouter } from 'next/router';
import AllIntro from '../../ui/AllIntro/AllIntro';


const Catalog = () => {
    const router = useRouter();
    const id = router.query;
    const [de, setDe] = React.useState(false);
    const [loader, setLoader] = React.useState(true);

    // Используем контекст для получения базового URL и токена авторизации
    const { url, auth_token } = React.useContext(Context);

    // Состояния для фильтров
    const [category_id, setCategory_id] = React.useState(id.category_id);
    const [brand_id, setBrand_id] = React.useState(id.brand_id);
    const [car_model_id, setCar_model_id] = React.useState(id.car_model_id);
    const [usd_price_min, setUsd_price_min] = React.useState("");
    const [usd_price_max, setUsd_price_max] = React.useState("");

    // Состояния для данных
    const [productData, setProductData] = React.useState([]);
    const [filterKategory, setFilterKategory] = React.useState([]);
    const [brendData, setBrendData] = React.useState([]);
    const [carModel, setCarModel] = React.useState([]);
    const [data, setData] = React.useState(['www']);

    // Состояния для управления фильтрацией
    const [filter, setFilter] = React.useState(false);
    const [kategory, setKategory] = React.useState(false);
    const [brend, setBrend] = React.useState(false);
    const [price, setPrice] = React.useState(false);
    const [model, setModel] = React.useState(false);

    // Для управления пагинацией
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(1);
    const [selectedProduct, setSelectedProduct] = React.useState([]);


    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
    };

    const productOptions = productData.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    // console.log(selectedProduct.value);

    React.useEffect(() => {
        const fullUrl = `${url}/v1/products/filter_products/all_data/`;
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
                    setProductData(data.categories);
                    setFilterKategory(data.categories);
                    setBrendData(data.brands);
                    setCarModel(data.car_models);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        const fullUrl = `${url}/v1/products/filter_products/?category_id=${category_id ? category_id : ""}&page=${currentPage}&brand_id=${brand_id ? brand_id : ""}&usd_price_min=${usd_price_min ? usd_price_min : ""}&usd_price_max=${usd_price_max ? usd_price_max : ""}&car_model_id=${car_model_id ? car_model_id : ""}`;
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
                    setData(data?.results);
                    setItemsPerPage(data?.total_pages);
                    setLoader(false);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [currentPage, de]);

    const applyFilters = () => {
        setDe(!de)
        setCurrentPage(1);
        setFilter(false)
    };

    const clearFilters = () => {
        setDe(!de)
        setCategory_id("");
        setBrand_id("");
        setCar_model_id("");
        setUsd_price_min("");
        setUsd_price_max("");
        setCurrentPage(1);
        setFilter(false)
    };

    return (
        <>
            <AllIntro text="katalog" />
            <section className={styles.catalog}>
                <MyContainer>
                    <div className={styles.catalog__item}>
                        <div className={styles.catalog__item__res}>
                            <span onClick={() => setFilter(!filter)}>
                                <i className={`fa-solid ${!filter ? "fa-arrow-up-short-wide" : "fa-arrow-down-short-wide"}`}></i>
                                Filterlash
                            </span>
                        </div>
                        <div className={`${styles.catalog__item__left} ${filter ? styles.df : ''}`}>
                            <div className={styles.catalog__item__left__select}>
                                <Select
                                    options={productOptions}
                                    placeholder="Qidiruv"
                                    value={selectedProduct}
                                    onChange={handleProductChange}
                                />
                            </div>
                            <ul className={styles.catalog__item__left__list}>
                                <span onClick={() => setKategory(!kategory)} className={styles.span}>
                                    <p>Kategoriya</p>
                                    <i className={`fa-solid ${kategory ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {
                                    loader ?
                                        <div className={styles.loader}>
                                            <div className={styles.loaderr}></div>
                                            <div className={styles.loaderr}></div>
                                            <div className={styles.loaderr}></div>
                                        </div> : (
                                            filterKategory?.map((item) => (
                                                <li key={item.id} className={`${kategory ? styles.dn : ""}`}>
                                                    <label>
                                                        <input type="checkbox" onChange={() => setCategory_id(item.id)} checked={category_id === item.id} />
                                                        <p>{item.name}</p>
                                                    </label>
                                                </li>
                                            ))
                                        )
                                }
                            </ul>

                            <ul className={styles.catalog__item__left__list}>
                                <span onClick={() => setBrend(!brend)} className={styles.span}>
                                    <p>Brend</p>
                                    <i className={`fa-solid ${brend ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {
                                    loader ?
                                        <div className={styles.loader}>
                                            <div className={styles.loaderr}></div>
                                            <div className={styles.loaderr}></div>
                                            <div className={styles.loaderr}></div>
                                        </div> : (
                                            brendData?.map((item) => (
                                                <li key={item.id} className={`${brend ? styles.dn : ""}`}>
                                                    <label>
                                                        <input type="checkbox" onChange={() => setBrand_id(item.id)} checked={brand_id === item.id} />
                                                        <p>{item.name}</p>
                                                    </label>
                                                </li>
                                            ))
                                        )
                                }
                            </ul>

                            <div className={styles.catalog__item__left__list}>
                                <span onClick={() => setPrice(!price)} className={styles.span}>
                                    <p>Summani tanlang</p>
                                    <i className={`fa-solid ${price ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                <div className={`${price ? styles.dn : styles.inps}`}>
                                    <input
                                        type="number"
                                        placeholder='10$ dan'
                                        value={usd_price_min}
                                        onChange={(e) => setUsd_price_min(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder='1200$ gacha'
                                        value={usd_price_max}
                                        onChange={(e) => setUsd_price_max(e.target.value)}
                                    />
                                </div>
                            </div>

                            <ul className={styles.catalog__item__left__list}>
                                <span onClick={() => setModel(!model)} className={styles.span}>
                                    <p>Avtomobil rusumi</p>
                                    <i className={`fa-solid ${model ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {carModel?.map((item) => (
                                    <li key={item.id} className={`${model ? styles.dn : ""}`}>
                                        <label>
                                            <input type="checkbox" onChange={() => setCar_model_id(item.id)} checked={car_model_id === item.id} />
                                            <p>{item.name}</p>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <button className={!brand_id && !category_id && !car_model_id && !usd_price_min && !usd_price_max ? styles.dDN : ''} type='button' onClick={applyFilters}>Filterlash</button>
                            <button className={!brand_id && !category_id && !car_model_id && !usd_price_min && !usd_price_max ? styles.dN : ''} type='button' onClick={clearFilters}>Filterni bekor qilish</button>
                        </div>
                        <div className={styles.catalog__item__content}>
                            <div className={styles.catalog__item__content__list}>
                                {
                                    data?.length > 0 ? (
                                        loader ?
                                            <div className={styles.loader}>
                                                <div className={styles.loader__ring}></div>
                                                <div className={styles.loader__ring}></div>
                                                <div className={styles.loader__ring}></div>
                                            </div>
                                            : (
                                                data?.map((item) => (
                                                    <div key={item.id} className={styles.catalog__item__content__list__cart}>
                                                        <div className={styles.catalog__item__content__list__cart__item}>
                                                            <div
                                                                onClick={() =>
                                                                    router.push({
                                                                        pathname: '/catalog-detail',
                                                                        query: {
                                                                            product_id: item.id
                                                                        }
                                                                    })
                                                                }
                                                                className={styles.catalog__item__content__list__cart__item__img}
                                                            >
                                                                <Image
                                                                    width={300}
                                                                    height={300}
                                                                    src={item.image_1}
                                                                    alt='slayd'
                                                                    priority
                                                                />
                                                            </div>
                                                            <Link
                                                                href={{
                                                                    pathname: '/catalog-detail',
                                                                    query: { product_id: item.id },
                                                                }}
                                                            >
                                                                <b>{item.name}</b>
                                                            </Link>
                                                            <div className={styles.price}>
                                                                {
                                                                    item.uzs_price.length <= 9 ? (
                                                                        <p>{parseInt(item.uzs_price).toLocaleString('en-US').replace(/,/g, ' ')} so'm</p>
                                                                    ) : (
                                                                        <p>{parseInt(item.usd_price).toLocaleString('en-US').replace(/,/g, ' ')} $</p>
                                                                    )
                                                                }
                                                                <button
                                                                    style={{ fontSize: '1rem' }}
                                                                    type='button'
                                                                    onClick={() =>
                                                                        router.push({
                                                                            pathname: '/catalog-detail',
                                                                            query: {
                                                                                product_id: item.id
                                                                            }
                                                                        })
                                                                    }
                                                                >
                                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )
                                    ) : (
                                        <div className={styles.none}>
                                            <p>Bunday mahsulotlar topilmadi</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div className={styles.catalog__item__content__pagination}>
                                <button type='button'
                                    className={styles.catalog__item__content__pagination__btn}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <i className="fa-solid fa-angles-left"></i>
                                </button>

                                {Array.from({ length: itemsPerPage }, (_, index) => index + 1).map(
                                    (page) => (
                                        <button type='button'
                                            className={`${styles.catalog__item__content__pagination__items} ${currentPage === page ? styles.act : ""}`}
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}

                                <button type='button'
                                    className={styles.catalog__item__content__pagination__btn}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === itemsPerPage}
                                >
                                    <i className="fa-solid fa-angles-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </MyContainer>
            </section>
        </>
    )
}

export default Catalog; 