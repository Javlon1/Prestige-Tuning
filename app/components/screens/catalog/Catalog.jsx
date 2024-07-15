import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Catalog.module.scss'
import Select from "react-select";
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import slayd1 from '../../../../public/img/slayd.png'
import { useRouter } from 'next/router';
import AllIntro from '../../ui/AllIntro/AllIntro';


const Catalog = () => {
    const router = useRouter();
    const [itemsPerPage, setItemsPerPage] = React.useState(5);
    const [currentPage, setCurrentPage] = React.useState(1);

    const [data] = React.useState(
        [
            {
                id: 1,
                title: "Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan",
                price: "1850000",
                image: slayd1
            },
            {
                id: 2,
                title: "Роскошный комфорт",
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
                title: "Рабочий стол руководителя",
                price: "1700000",
                image: slayd1
            },
            {
                id: 5,
                title: "Эргономичное кресло",
                price: "1200000",
                image: slayd1
            },
            {
                id: 6,
                title: "Хрустальная люстра",
                price: "2000000",
                image: slayd1
            },
            {
                id: 7,
                title: "Деревянный шкаф",
                price: "2800000",
                image: slayd1
            },
            {
                id: 8,
                title: "Кухонный остров",
                price: "3200000",
                image: slayd1
            },
            {
                id: 9,
                title: "Развлекательный центр",
                price: "2900000",
                image: slayd1
            }
        ]
    )
    const { lan } = React.useContext(Context);
    const [filter, setFlter] = React.useState(false);
    const [kategory, setKategory] = React.useState(false);
    const [brend, setBrend] = React.useState(false);
    const [price, setPrice] = React.useState(false);
    const [model, setModel] = React.useState(false);

    const [brendData, setBrendData] = React.useState([]);
    const [productData, setProductData] = React.useState([
        {
            id: 1,
            title: "Malibu rul",
        },
        {
            id: 2,
            title: "rul",
        },
        {
            id: 3,
            title: "Malibu rul",
        },
        {
            id: 4,
            title: "Рабочий стол руководителя",
        }
    ]);
    const [selectedProduct, setSelectedProduct] = React.useState([]);


    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption);
    };

    const productOptions = productData.map((item) => ({
        value: item.id,
        label: item.title,
    }));

    //   
    // client: selectedProduct.value ? selectedProduct.value : null,
    // 

    const [filterKategory, setFilterKategory] = React.useState([
        {
            id: 1,
            link: "/kategoriya",
            nav: "Kassalar",
            icon: "fa-solid fa-wallet",
        },
        {
            id: 2,
            link: "/profit",
            nav: "Pul olish",
            icon: "fa-solid fa-circle-dollar-to-slot",
        },
        {
            id: 3,
            link: "/expenses",
            nav: "Pul berish",
            icon: "fa-solid fa-money-bill",
        },
    ]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <>
            <AllIntro text="katalog" />
            <section className={styles.catalog}>
                <MyContainer>
                    <div className={styles.catalog__item}>
                        <div className={styles.catalog__item__res}>
                            <span onClick={() => setFlter(!filter)}>
                                <i class={`fa-solid ${!filter ? "fa-arrow-up-short-wide" : "fa-arrow-down-short-wide"}`}></i>
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
                                    <p>
                                        Kategoriya
                                    </p>
                                    <i className={`fa-solid ${kategory ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {filterKategory?.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`${kategory ? styles.dn : ""}`}
                                    >
                                        <label>
                                            <input type="checkbox" name="" id="" />
                                            <p>{item.nav}</p>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <ul className={styles.catalog__item__left__list}>
                                <span onClick={() => setBrend(!brend)} className={styles.span}>
                                    <p>
                                        Brend
                                    </p>
                                    <i className={`fa-solid ${brend ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {filterKategory?.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`${brend ? styles.dn : ""}`}
                                    >
                                        <label>
                                            <input type="checkbox" name="" id="" />
                                            <p>{item.nav}</p>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.catalog__item__left__list}>
                                <span onClick={() => setPrice(!price)} className={styles.span}>
                                    <p>
                                        Summani tanlang
                                    </p>
                                    <i className={`fa-solid ${price ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                <div
                                    className={`${price ? styles.dn : styles.inps}`}
                                >
                                    <input
                                        type="text"
                                        placeholder='10$ dan'
                                    />
                                    <input
                                        type="text"
                                        placeholder='1200$ gacha'
                                    />
                                </div>
                            </div>

                            <ul className={styles.catalog__item__left__list}>
                                <span onClick={() => setModel(!model)} className={styles.span}>
                                    <p>
                                        Avtomobil rusumi
                                    </p>
                                    <i className={`fa-solid ${model ? "fa-angle-up" : "fa-angle-down"}`}></i>
                                </span>
                                {filterKategory?.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`${model ? styles.dn : ""}`}
                                    >
                                        <label>
                                            <input type="checkbox" name="" id="" />
                                            <p>{item.nav}</p>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <button type='button'>Filterlash</button>
                            <button type='button'>Filterni bekor qilish</button>
                        </div>
                        <div className={styles.catalog__item__content}>
                            <div className={styles.catalog__item__content__list}>
                                {
                                    data?.map((item) => (
                                        <div key={item.id} className={styles.catalog__item__content__list__cart}>
                                            <div className={styles.catalog__item__content__list__cart__item}>
                                                <div
                                                    className={styles.catalog__item__content__list__cart__item__img}
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
                                                    <button type='button' onClick={() =>
                                                        router.push("/catalog-detail")
                                                    }>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className={styles.catalog__item__content__pagination}>
                                <button type='button'
                                    className={styles.catalog__item__content__pagination__btn}
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                >
                                    <i className="fa-solid fa-angles-left"></i>
                                </button>

                                {Array.from({ length: itemsPerPage }, (_, index) => index + 1).map(
                                    (page) => (
                                        <button type='button'
                                            className={`${styles.catalog__item__content__pagination__items} ${currentPage === page ? styles.act : ""
                                                }`}
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}

                                <button type='button'
                                    className={styles.catalog__item__content__pagination__btn}
                                    onClick={handleNextPage}
                                    disabled={currentPage === itemsPerPage}
                                >
                                    <i className="fa-solid fa-angles-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </MyContainer>
            </section >
        </>
    )
}

export default Catalog; 