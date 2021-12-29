import React, { useEffect, useRef, useContext } from "react";
import ShoppingCartItem from "./Bones/ShoppingCardItem";
import StyledShoppingCart from "./ShoppingCartStyles";
import CartContext from "../../provider/provider";
import EmptyCart from "./Bones/EmptyCart";

const ShoppingCart = () => {
    const {toggleCart, cartOpen, checkout, loading} = useContext(CartContext)
    const emptyCart = checkout.lineItems.length === 0
    const cartRef = useRef()

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

    return (
        <>
            <StyledShoppingCart ref={cartRef}>
                <p>I be a cart</p>
                {emptyCart ? 
                <EmptyCart /> : 
                (
                    <ul>
                        {checkout.lineItems.map(item => {
                            return <ShoppingCartItem data={item} />
                        })}
                    </ul>
                )}
            </StyledShoppingCart>
        </>
    )
}

export default ShoppingCart