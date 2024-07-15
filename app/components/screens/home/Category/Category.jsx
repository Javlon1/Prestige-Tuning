import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Category.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import orginal from '../../../../../public/img/orginal.png'
import category from '../../../../../public/img/category.png'

const Category = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.category}>
            <MyContainer>
                <ul className={styles.category__list}>
                    <li className={styles.category__list__item}>
                        <Link href={'/catalog'}>
                            <Image
                                src={orginal}
                                alt='category'
                            />
                            <div>
                                <b>Rullar</b>
                                <p>730 mahsulot</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.category__list__item}>
                        <Link href={'/catalog'}>
                            <Image
                                src={orginal}
                                alt='category'
                            />
                            <div>
                                <b>Rullar</b>
                                <p>730 mahsulot</p>
                            </div>
                        </Link>
                    </li>
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