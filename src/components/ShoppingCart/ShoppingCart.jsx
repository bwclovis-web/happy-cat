import React, { useState, useEffect, useRef, useContext } from "react";
import ShoppingCartItem from "./Bones/ShoppingCardItem";
import StyledShoppingCart from "./ShoppingCartStyles";
import CartContext from "../../provider/provider";

const ShoppingCart = ({data}) => {
    const [loading, setLoading] = useState(true)
    const {toggleCart, cartOpen, itemsInCart} = useContext(CartContext)
    const cartRef = useRef()

    useEffect(() => {
        console.log('SC DATA', data)
        itemsInCart && setLoading(false)
    }, [itemsInCart])

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                toggleCart()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [cartOpen])

    if(loading) {
        return 'loading'
    }

    console.log('items',itemsInCart)

    return (
        <>
            <StyledShoppingCart ref={cartRef}>
                <p>I be a cart</p>
                {data.map(item => {
                    return <ShoppingCartItem data={item}/>
                })}
            </StyledShoppingCart>
        </>
    )
}

export default ShoppingCart