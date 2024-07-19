import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://api.prestigetuning.uz/api")
    const [message, setMessage] = useState(false)
    const [messageType, setMessageType] = useState('')
    const [messageText, setMessageText] = useState('')
    const [auth_token] = useState('2dc393809238d49e74f8b9f3019055824f70c64f')

    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = window.localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <Context.Provider value={{
            url, cart, setCart, message, setMessage, messageType, setMessageType,
            messageText, setMessageText, auth_token
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }
// setCart([...new Set([...cart, item])]);