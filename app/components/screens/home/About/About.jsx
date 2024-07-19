import * as React from 'react';
import Image from 'next/image'
import styles from './About.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import about from '../../../../../public/img/about.png'

const About = () => {
    return (
        <section id='about' className={styles.about}>
            <MyContainer>
                <div className={styles.about__item}>
                    <div className={styles.about__item__left}>
                        <div className={styles.about__item__left__title}>
                            <h2>Biz haqimizda</h2>

                            <i className="fa-regular fa-star"></i>
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

                        <a className={styles.btn} href="tel:+998987000021">
                            Bog’lanish
                        </a>
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