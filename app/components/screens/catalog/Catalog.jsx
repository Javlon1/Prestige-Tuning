import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Catalog.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Catalog = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.Catalog}>
            <MyContainer>
                <h1>Catalog</h1>
            </MyContainer>
        </section>
    )
}

export default Catalog; 