import React, { useContext, useEffect } from "react";
import Commerce from '@chec/commerce.js';
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CartContext from "../../provider/provider";
import {RiShoppingCartLine} from '@react-icons/all-files/ri/RiShoppingCartLine'
import {RiShoppingCartFill} from '@react-icons/all-files/ri/RiShoppingCartFill'

const ShoppingCartButton = () => {
    const {toggleCart, cartOpen, setItemsInCart, itemsInCart} = useContext(CartContext)
    const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);

    useEffect(() => {
        commerce.cart.contents().then((cart) => {
            setItemsInCart(cart)
        })
    }, [])

    const handleCartClick = () => {
        toggleCart()
    }

    console.log(itemsInCart)

    return (
        <>
            <button onClick={handleCartClick} className="cart-button">
                {itemsInCart?.length ? <RiShoppingCartFill size={30}/> : <RiShoppingCartLine size={30}/>}
            </button>
            {cartOpen && <ShoppingCart data={itemsInCart}/>}
        </>
    )
}

export default ShoppingCartButton