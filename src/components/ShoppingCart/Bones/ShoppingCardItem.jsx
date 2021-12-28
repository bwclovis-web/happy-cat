import React from "react";
import Commerce from '@chec/commerce.js';

const ShoppingCartItem =({data}) => {
    const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);

    const handleDeleteItem = () => {
        commerce.cart.remove(data.id)
    }

    return (
        <li>
            <span>Name: {data.name}</span>
            <span>Quantity: {data.quantity}</span>
            <button onClick={handleDeleteItem}>X</button>
        </li>
    )
}

export default ShoppingCartItem;