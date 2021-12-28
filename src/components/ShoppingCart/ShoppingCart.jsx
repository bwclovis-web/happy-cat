import React from "react";
import { useState, useEffect } from "react";
import StyledShoppingCart from "./ShoppingCartStyles";

const ShoppingCart = ({data}) => {
    console.log('Data', data)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        data && setLoading(false)
    }, [data])

    if(loading) {
        return 'loading'
    }

    return (
        <StyledShoppingCart>
            <p>I be a cart</p>
            {data.line_items.map(item => {
                return <p>{item.name}</p>
            })}
        </StyledShoppingCart>
    )
}

export default ShoppingCart