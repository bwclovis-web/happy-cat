import React, { useState, useEffect, useRef, useContext } from "react";
import ShoppingCartItem from "./Bones/ShoppingCardItem";
import StyledShoppingCart from "./ShoppingCartStyles";
import CartContext from "../../provider/provider";

const ShoppingCart = ({data}) => {
    const [loading, setLoading] = useState(true)
    const {toggleCart, cartOpen} = useContext(CartContext)
    const cartRef = useRef()

    useEffect(() => {
        data && setLoading(false)
    }, [data])

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

    return (
        <>
            <StyledShoppingCart ref={cartRef}>
                <p>I be a cart</p>
                {data.line_items.map(item => {
                    return <ShoppingCartItem data={item}/>
                })}
            </StyledShoppingCart>
        </>
    )
}

export default ShoppingCart