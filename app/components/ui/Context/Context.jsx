import { createContext, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api")
    const [cart, setCart] = useState(['w'])

    return (
        <Context.Provider value={{
            url, cart, setCart
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }