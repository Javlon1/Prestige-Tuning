import * as React from 'react';
import Image from 'next/image'
import styles from './Register.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Message from '@/app/components/ui/Message/Message';
import car from "../../../../../public/img/car.png"
import cartImg from "../../../../../public/img/cart.png"
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const { url, auth_token, cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
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

    const formatPhoneNumber = (number) => {
        let newValue = number.replace(/\D/g, '');

        if (!newValue.startsWith('998')) {
            newValue = '998' + newValue;
        }

        if (newValue.length > 12) {
            newValue = newValue.slice(0, 12);
        }

        if (newValue.length > 3) newValue = newValue.replace(/^(\d{3})(\d+)/, '$1 $2');
        if (newValue.length > 6) newValue = newValue.replace(/^(\d{3}) (\d{2})(\d+)/, '$1 $2 $3');
        if (newValue.length > 9) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3})(\d+)/, '$1 $2 $3 $4');
        if (newValue.length > 11) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3}) (\d{2})(\d+)/, '$1 $2 $3 $4 $5');

        return newValue.trim();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'phone') {
            const formattedPhone = formatPhoneNumber(value);
            setFormData({ ...formData, [id]: formattedPhone });
        } else {
            setFormData({ ...formData, [id]: value });
        }
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

    const transformedArray = cart.map(item => ({
        id: item.id,
        quantity: item.quantity || 0
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullUrl = `${url}/v1/order/orders/`;

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    full_name: formData.name,
                    phone_number: formData.phone.replace(/\s/g, ''),
                    city: formData.city,
                    village: formData.district,
                    street: formData.street,
                    home_number: formData.house,
                    message_for_delivery: formData.additionalInfo,
                    delivery_status: !isChecked,
                    items: transformedArray,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(true)
                setMessageType('error')
                setMessageText('Xabaringiz qabul qilinmadi !')

                throw new Error('Network response was not ok');
            } else {
                setCart([]);
                setFormData({ name: '', phone: '', city: '', district: '', street: '', house: '', additionalInfo: '' });
                router.push('/register-success');
            }
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

    const calculateTotalSum = () => {
        return cart.reduce((sum, item) => {
            const price = parseFloat(item.usd_price);
            const quantity = parseInt(item.quantity, 10);

            if (isNaN(price) || isNaN(quantity)) {
                console.warn(`Invalid data for item with id ${item.id}: price = ${item.price}, quantity = ${item.quantity}`);
                return sum;
            }

            return sum + price * quantity;
        }, 0);
    };

    const totalSum = calculateTotalSum();

    const [isChecked, setIsChecked] = React.useState(false);

    const handleToggle = () => {
        setIsChecked(prevChecked => !prevChecked);
    };

    return (
        <section className={styles.register}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.register__item}>
                    <div className={styles.register__item__left}>
                        <div className={styles.register__item__left__header}>
                            <div onClick={handleToggle} className={styles.switchSlider}>
                                <span className={isChecked ? styles.inactive : styles.active}>Yetkazib berish</span>
                                <span className={isChecked ? styles.active : styles.inactive}>Olib ketish</span>
                            </div>
                        </div>
                        <div className={styles.register__item__left__content}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.register__item__left__content__top}>
                                    <div className={styles.register__item__left__content__top__left}>
                                        <div className={styles.register__item__left__content__top__left__form}>
                                            <h3>Buyurtmachi</h3>
                                            <div>
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
                                                        type="text"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
                                                        required
                                                        maxLength={17}
                                                    />
                                                    <label
                                                        htmlFor="phone"
                                                        className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                                    >
                                                        Telefon raqamingizni yozing
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.register__item__left__content__top__right}>
                                        <div className={styles.register__item__left__content__top__right__content}>
                                            <h3>Buyurtmangiz</h3>
                                            <span>Tovarlar soni <b>{cart.length}</b></span>
                                            <span>Jami narxi <b>{totalSum.toLocaleString('en-US').replace(/,/g, ' ')} $</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.register__item__left__content__bottom}>
                                    <div className={`${styles.register__item__left__content__bottom__left__form} ${isChecked ? styles.inactiveSwitch : styles.actSwitch}`}>
                                        <h3>Yetkazib berish manzili</h3>
                                        <div>
                                            <div className={styles.inputContainer}>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    onFocus={handleFocus}
                                                    onBlur={handleBlur}
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
                                                />
                                                <label
                                                    htmlFor="district"
                                                    className={`${styles.placeholder} ${focused.district || formData.district ? styles.active : ''}`}
                                                >
                                                    Tuman
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', gap: '2rem' }}>
                                                <div className={styles.inputContainer}>
                                                    <input
                                                        type="text"
                                                        id="street"
                                                        value={formData.street}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        onBlur={handleBlur}
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
                                                    />
                                                    <label
                                                        style={{ marginTop: '-1.2rem' }}
                                                        htmlFor="house"
                                                        className={`${styles.placeholder} ${focused.house || formData.house ? styles.active : ''}`}
                                                    >
                                                        Uy
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={styles.inputContainer}>
                                                <input
                                                    type="text"
                                                    id="additionalInfo"
                                                    value={formData.additionalInfo}
                                                    onChange={handleChange}
                                                    onFocus={handleFocus}
                                                    onBlur={handleBlur}
                                                />
                                                <label
                                                    htmlFor="additionalInfo"
                                                    className={`${styles.placeholder} ${focused.additionalInfo || formData.additionalInfo ? styles.active : ''}`}
                                                >
                                                    Kuryerga qo’shimcha ma’lumot
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.register__item__left__content__bottom__content} ${isChecked ? styles.actSwitch : styles.inactiveSwitch}`}>
                                        <div className={styles.item}>
                                            <div className={styles.item__left}>
                                                <h3>Olib ketish manzili</h3>
                                                <p><span>Prestige Tuning</span> markazimiz Andijon shahar</p>
                                                <p><span>Mashrab ko’chasi 2B</span> uyda joylashgan.</p>
                                                <p><span>Mo’ljal:</span> Delfin moykasi, Oqshom choyxonasi.</p>
                                                <b>Du-Shan  10:00 dan 22:00 gacha</b>
                                            </div>
                                            <div className={styles.item__right}>
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.54067254119076!2d72.34279635575227!3d40.750937490184995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedd6a16efb51%3A0xde3157b76b87001!2sPrestige%20Tuning!5e0!3m2!1suz!2s!4v1719455446648!5m2!1suz!2s"
                                                    width="100%"
                                                    height="100%"
                                                    title="Карта Google Maps с местоположением Prestic tuning"
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <button type='submit' className={styles.submitButton}>Buyurtma berish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.register__item__right}>
                        <div className={styles.register__item__right__header}>
                            <h2>Buyurtma</h2>
                        </div>
                        <div className={styles.register__item__right__content}>
                            <Image
                                src={cartImg}
                                alt='cartImg'
                            />
                            <p>To’lovlarni naqd pul va Uzcard , Humo to’lov tizimlari orqali qilishingiz mumkin.</p>
                        </div>
                        <div className={styles.register__item__right__content}>
                            <Image
                                src={car}
                                alt='car'
                            />
                            <p>O’zbekiston bo’ylab tovarlarni 1 kundan 3 kungacha muddatda yetkazib beramiz !</p>
                        </div>
                        <div className={styles.register__item__right__contact}>
                            <h2>Savollaringiz bormi ? </h2>
                            <a href="tel:+998987000021">
                                <i className="fa-solid fa-phone-volume"></i>
                                +998 98 700 00 21
                            </a>
                            <a href="tel:+998987000021">
                                <i className="fa-solid fa-phone-volume"></i>
                                +998 98 700 00 21
                            </a>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Register;