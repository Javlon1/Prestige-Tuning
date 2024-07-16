import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("https://646eb6f042d8c8660ed1ad7d55dabf1a.serveo.net/api")
    const [message, setMessage] = useState(false)
    const [messageType, setMessageType] = useState('')
    const [messageText, setMessageText] = useState('')
    const [auth_token] = useState('b010ae28bdd0b0ce81e4bbcae88ad2db4a1dc406')

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