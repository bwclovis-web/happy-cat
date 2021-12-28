import React from 'react'
import UseCart from '../lib/useCart'
import useItemsInCart from '../lib/useItemsInCart'

const CartContext = React.createContext({
    cartOpen: false,
    itemsInCart: [],
    setItemsInCart(){},
    toggleCart(){}
})

export const CartProvider = ({children}) => {
    const [cartOpen, toggleCart] = UseCart()
    const [itemsInCart, setItemsInCart] =useItemsInCart()

    return (
        <CartContext.Provider value={{
            cartOpen: cartOpen,
            toggleCart: toggleCart,
            itemsInCart: itemsInCart,
            setItemsInCart: setItemsInCart

        }}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartContext;