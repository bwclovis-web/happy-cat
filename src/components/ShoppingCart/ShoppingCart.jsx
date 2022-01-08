import React, { useEffect, useRef, useContext } from "react";
import ShoppingCartItem from "./Bones/ShoppingCardItem";
import StyledShoppingCart from "./ShoppingCartStyles";
import CartContext from "../../provider/provider";
import EmptyCart from "./Bones/EmptyCart";
import Button from "../Button/Button";

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
    }, [cartOpen, toggleCart])

    const handleCheckout = () => {
        toggleCart()
        window.open(checkout.webUrl)
      }

    return (
        <>
            <StyledShoppingCart ref={cartRef}>
                <div className="cart-heading">
                    <p>I be a cart</p>
                    <Button onClick={() => toggleCart()}>
                        x
                    </Button>
                </div>
                {emptyCart ? <EmptyCart /> : 
                    (
                        <>
                            <ul>
                                {checkout.lineItems.map(item => {
                                    console.log(checkout.subtotalPriceV2.amount)
                                    return <ShoppingCartItem data={item} key={item.id}/>
                                })}
                            </ul>
                            <button onClick={handleCheckout} disabled={loading}>TEST</button>
                        </>
                    )
                }
            </StyledShoppingCart>
        </>
    )
}

export default ShoppingCart