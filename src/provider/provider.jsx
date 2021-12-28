import React from 'react'
import UseCart from '../lib/useCart'

const CartContext = React.createContext({
    cartOpen: false,
    toggleCart(){}
})

export const CartProvider = ({children}) => {
    const [cartOpen, toggleCart] = UseCart()

    return (
        <CartContext.Provider value={{
            cartOpen: cartOpen,
            toggleCart: toggleCart
        }}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartContext;