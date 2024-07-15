import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api")
    const [cart, setCart] = useState([])
    const [message, setMessage] = useState(false)
    const [messageType, setMessageType] = useState('')
    const [messageText, setMessageText] = useState('')


    return (
        <Context.Provider value={{
            url, cart, setCart, message, setMessage, messageType, setMessageType,
            messageText, setMessageText,
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }
// setCart([...new Set([...cart, item])]);