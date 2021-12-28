import React, { useState } from "react";
import Commerce from '@chec/commerce.js';
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShoppingCartButton = () => {
    const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState()

    const handleCartClick = () => {
        
        commerce.cart.retrieve().then((cart) => 
            setCartItems(cart),
            setCartOpen(!cartOpen)
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