import * as React from 'react';
import styles from './AllIntro.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const AllIntro = ({ text }) => {

    return (
        <section className={styles.allIntro}>
            <MyContainer>
                <h1>{text}</h1>
            </MyContainer>
        </section>
    )
}

export default AllIntro;