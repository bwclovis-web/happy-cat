import React, { useContext, useState } from "react";
import Commerce from '@chec/commerce.js';
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CartContext from "../../provider/provider";

const ShoppingCartButton = () => {
    const [cartItems, setCartItems] = useState()
    const {toggleCart, cartOpen} = useContext(CartContext)
    const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);


    const handleCartClick = () => {
        commerce.cart.retrieve().then((cart) => 
            setCartItems(cart),
            toggleCart()
        );
    }

    return (
        <>
            <button onClick={handleCartClick}>OH HAI</button>
            {cartOpen && <ShoppingCart data={cartItems}/>}
        </>
    )
}

export default ShoppingCartButton