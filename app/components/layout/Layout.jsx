import styles from './Layout.module.scss';
import Header from './header/Header';
import ScrollUp from '../ui/scrollUp/scrollUp';
import Footer from './footer/Footer';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                <Header />
                {children}
                <ScrollUp />
                <Footer />
            </main>
        </div>
    )
}

export default Layout;