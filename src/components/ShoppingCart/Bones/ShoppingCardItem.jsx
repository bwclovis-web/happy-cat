import React from "react";
import DeleteFromCartButton from "./DeleteFromCartButton";

const ShoppingCartItem =({data}) => {
    return (
        <li>
            <span>Name: {data.title}</span>
            <span>Quantity: {data.quantity}</span>
            <DeleteFromCartButton id={data.id} />
        </li>
    )
}

export default ShoppingCartItem;