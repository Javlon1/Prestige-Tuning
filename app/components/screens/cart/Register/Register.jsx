import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Register.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Message from '@/app/components/ui/Message/Message';


const Register = () => {
    const { cart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        city: '',
        district: '',
        street: '',
        house: '',
        additionalInfo: ''
    });
    const [focused, setFocused] = React.useState({
        name: false,
        phone: false,
        city: false,
        district: false,
        street: false,
        house: false,
        additionalInfo: false
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        setFocused({ ...focused, [id]: true });
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        if (!formData[id]) {
            setFocused({ ...focused, [id]: false });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setMessage(true);
        setMessageType('success');
        setMessageText('Xabaringiz qabul qilindi!');
    };

    const calculateTotalSum = () => {
        return cart.reduce((sum, item) => {
            const price = parseFloat(item.price);
            return sum + (isNaN(price) ? 0 : price);
        }, 0);
    };

    const totalSum = calculateTotalSum();

    return (
        <section className={styles.register}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.register__item}>
                    <div className={styles.register__item__left}>
                        <div className={styles.register__item__left__header}>


                        </div>
                        <div className={styles.register__item__left__content}>
                            <div className={styles.register__item__left__content__top}>
                                <div className={styles.register__item__left__content__top__left}>
                                    <div className={styles.register__item__left__content__top__left__form}>
                                        <form onSubmit={handleSubmit} className={styles.form}>
                                            <div>
                                                <h3>Buyurtmachi</h3>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="name"
                                                        className={`${styles.placeholder} ${focused.name || formData.name ? styles.active : ''}`}
                                                    >
                                                        Ismingizni yozing
                                                    </label>
                                                </div>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="number"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="phone"
                                                        className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                                    >
                                                        Telefon raqamingizni yozing
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <h3>Yetkazib berish manzili</h3>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="city"
                                                        className={`${styles.placeholder} ${focused.city || formData.city ? styles.active : ''}`}
                                                    >
                                                        Viloyat/Shahar
                                                    </label>
                                                </div>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="district"
                                                        value={formData.district}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="district"
                                                        className={`${styles.placeholder} ${focused.district || formData.district ? styles.active : ''}`}
                                                    >
                                                        Tuman
                                                    </label>
                                                </div>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="street"
                                                        value={formData.street}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="street"
                                                        className={`${styles.placeholder} ${focused.street || formData.street ? styles.active : ''}`}
                                                    >
                                                        Ko’cha
                                                    </label>
                                                </div>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="house"
                                                        value={formData.house}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="house"
                                                        className={`${styles.placeholder} ${focused.house || formData.house ? styles.active : ''}`}
                                                    >
                                                        Uy
                                                    </label>
                                                </div>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="additionalInfo"
                                                        value={formData.additionalInfo}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="additionalInfo"
                                                        className={`${styles.placeholder} ${focused.additionalInfo || formData.additionalInfo ? styles.active : ''}`}
                                                    >
                                                        Kuryerga qo’shimcha ma’lumot
                                                    </label>
                                                </div>
                                            </div>
                                            <button className={styles.submitButton}>Buyurtma berish</button>
                                        </form>
                                    </div>
                                </div>
                                <div className={styles.register__item__left__content__top__right}>
                                    <div className={styles.register__item__left__content__top__right__content}>
                                        <h3>Buyurtmangiz</h3>
                                        <span>Tovarlar soni <b>{cart.length}</b></span>
                                        <span>Jami narxi <b>{totalSum.toLocaleString('en-US').replace(/,/g, ' ')}</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.register__item__left__content__bottom}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.register__item__right}>

                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Register;