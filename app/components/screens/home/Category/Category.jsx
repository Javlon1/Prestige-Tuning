import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Category.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import category from '../../../../../public/img/category.png'

const Category = () => {
    const { url, auth_token } = React.useContext(Context);
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        const fullUrl = `${url}/v1/homepage/category/`;
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
        <section className={styles.category}>
            <MyContainer>
                <ul className={styles.category__list}>
                    {
                        data?.map((item, index) => (
                            <li key={index} className={styles.category__list__item}>
                                <Link
                                    href={{
                                        pathname: '/catalog',
                                        query: { category_id: item.id },
                                    }}
                                >
                                    <Image
                                        width={40}
                                        height={40}
                                        src={item.category_image}
                                        alt='category'
                                    />
                                    <div>
                                        <b>{item.name}</b>
                                        <p>{item.products_count} mahsulot</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                    <li className={styles.category__list__item}>
                        <Link href={'/catalog'}>
                            <div className={styles.img}>
                                <Image
                                    src={category}
                                    alt='category'
                                />
                                <b>Barchasi</b>
                            </div>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </li>
                </ul>
            </MyContainer>
        </section>
    )
}

export default Category;