import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Contact.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Contact = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.contact}>
            <MyContainer>
                <div className={styles.contact__item}>
                    <div className={styles.contact__item__title}>
                        <h2>Manzil va bog’lanish</h2>
                    </div>
                    <div className={styles.contact__item__content}>
                        <p className={styles.contact__item__content__address}>Prestige Tuning markazimiz Andijon shahar Mashrab ko’chasi 2B uyda joylashgan. Mo’ljal : Delfin moykasi, Oqshom choyxonasi.</p>
                        <div className={styles.contact__item__content__left}>

                        </div>
                        <div className={styles.contact__item__content__right}>

                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Contact;