import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './RegisterSuccess.module.scss'
import car from '../../../../../public/img/car.png'

const RegisterSuccess = () => {
    return (
        <section className={styles.registerSuccess}>
            <div className={styles.registerSuccess__content}>
                <h1>Buyurtmangiz qabul qilindi !</h1>
                <Image
                    src={car}
                    alt='car'
                />
                <p>Siz bilan tez orada sotuv menejerimiz bog’lanadi ! Hozircha boshqa tovarlarni ko’rish uchun Bosh sahifaga qaytishingiz mumkin !</p>
                <Link href={'/'}>Bosh sahifa</Link>
            </div>
        </section>
    )
}

export default RegisterSuccess;