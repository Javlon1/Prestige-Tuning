import * as React from 'react';
import styles from './Contact.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Message from '@/app/components/ui/Message/Message';


const Contact = () => {
    const { url, auth_token, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [formData, setFormData] = React.useState({ name: '', phone: '' });
    const [focused, setFocused] = React.useState({ name: false, phone: false });

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
    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullUrl = `${url}/v1/homepage/contact/`;

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone.replace(/\s/g, ''),
                }),
            });
            const data = await response.json();

            if (!response.ok) {
                setMessage(true)
                setMessageType('error')
                setMessageText('Xabaringiz qabul qilinmadi !')
                throw new Error('Network response was not ok');
            } else {
                setFormData({
                    name: '',
                    phone: '',
                })
                setMessage(true)
                setMessageType('success')
                setMessageText(data.message)
            }
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

    return (
        <section id='contact' className={styles.contact}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.contact__item}>
                    <div className={styles.contact__item__title}>
                        <h2>Manzil va bog’lanish</h2>
                    </div>
                    <div className={styles.contact__item__content}>
                        <div className={styles.contact__item__content__left}>
                            <p className={styles.contact__item__content__left__address}><span>Prestige Tuning</span> markazimiz Andijon shahar <span>Mashrab ko’chasi 2B</span> uyda joylashgan. Mo’ljal : Delfin moykasi, Oqshom choyxonasi.</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.54067254119076!2d72.34279635575227!3d40.750937490184995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedd6a16efb51%3A0xde3157b76b87001!2sPrestige%20Tuning!5e0!3m2!1suz!2s!4v1719455446648!5m2!1suz!2s"
                                width="100%"
                                height="100%"
                                title="Карта Google Maps с местоположением Prestic tuning"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className={styles.contact__item__content__right}>
                            <div className={styles.contact__item__content__right__form}>
                                <h3>Bog’lanish formasi</h3>
                                <form onSubmit={handleSubmit} className={styles.form}>
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
                                        />
                                        <label
                                            htmlFor="phone"
                                            className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                        >
                                            Telefon raqamingizni yozing
                                        </label>
                                    </div>
                                    <button type="submit" className={styles.submitButton}>Qo’ng’iroq buyurtma qilish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Contact;