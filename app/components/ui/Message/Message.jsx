import * as React from 'react';
import styles from './Message.module.scss'
import { Context } from '@/app/components/ui/Context/Context';


const Message = ({ messages, type }) => {
    const { message, setMessage } = React.useContext(Context);

    // message Start
    React.useEffect(() => {
        function changeMessageValue() {
            setMessage(false)
        }
        setTimeout(changeMessageValue, 3000);
    }, [message])
    // message End

    const messageClass = () => {
        switch (type) {
            case 'warning':
                return styles.messageWarning;
            case 'error':
                return styles.messageError;
            case 'success':
                return styles.messageSuccess;
            default:
                return '';
        }
    };

    return (
        <p className={`${styles.messag} ${message ? styles.messageAct : ''} ${messageClass()}`}>
            {messages}
        </p>
    )
}

export default Message;