import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Footer = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.footer}>
            <MyContainer>
                <h1>Footer</h1>
            </MyContainer>
        </section>
    )
}

export default Footer;