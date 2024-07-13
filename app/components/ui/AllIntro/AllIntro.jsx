import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './AllIntro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const AllIntro = ({ text }) => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.allIntro}>
            <MyContainer>
                <h1>{text}</h1>
            </MyContainer>
        </section>
    )
}

export default AllIntro;