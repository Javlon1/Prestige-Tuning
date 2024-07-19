import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import logo from '../../../../public/img/logo-footer.png'

const Footer = () => {
    const [link] = React.useState([
        {
            id: 1,
            link: '/',
            icon: 'fa-brands fa-telegram',
        },
        {
            id: 2,
            link: '/',
            icon: 'fa-brands fa-instagram',
        },
        {
            id: 3,
            link: '/',
            icon: 'fa-brands fa-youtube',
        },
        {
            id: 4,
            link: '/',
            icon: 'fa-brands fa-tiktok',
        },
    ])

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <Link href={'/'}>
                    <Image
                        width={150}
                        height={50}
                        src={logo}
                        alt='footer'
                    />
                </Link>
                <ul className={styles.footer__content__list}>
                    {
                        link.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <i className={item.icon}></i>
                                    <p>Link</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <span></span>
                <p>Copyright © ООО «Prestige Tuning» 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;