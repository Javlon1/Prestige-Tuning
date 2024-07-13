import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './About.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import about from '../../../../../public/img/about.png'

const About = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.about}>
            <MyContainer>
                <div className={styles.about__item}>
                    <div className={styles.about__item__left}>
                        <div className={styles.about__item__left__title}>
                            <h2>Biz haqimizda</h2>
                        </div>
                        <div className={styles.about__item__left__content}>
                            <p><span>Prestige Tuning</span> Andijondagi sifatli va tezkor tuning markazlaridan biri hisoblanadi. Markaz quyidagi sifatlari bilan boshqa tuning xizmatlaridan ajralib turadi:</p>
                            <div className={styles.about__item__left__content__list}>
                                <p><span>10 yillik</span> ish tajribasi</p>
                                <p>Yiliga <span>10.000 dan ortiq mijozga</span> xizmat ko’rsatadi</p>
                                <p>Boshqa tuning xizmatlaridan bir <span>necha marotaba</span> tez va sifatli xizmat ko’rsatadi</p>
                                <p><span>Malakali</span> usta va ishchilar ishlaydi</p>
                            </div>
                        </div>
                        <button>Bog’lanish</button>
                    </div>
                    <div className={styles.about__item__right}>
                        <Image
                            alt='about'
                            src={about}
                        />
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default About;