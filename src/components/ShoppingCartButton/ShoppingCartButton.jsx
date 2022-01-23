import React, { useContext } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CartContext from "../../provider/provider"
import {RiShoppingCartLine} from '@react-icons/all-files/ri/RiShoppingCartLine'
import {RiShoppingCartFill} from '@react-icons/all-files/ri/RiShoppingCartFill'

const ShoppingCartButton = () => {
    const {toggleCart, checkout} = useContext(CartContext)
    const emptyCart = checkout.lineItems.length === 0

    return (
        <>
            <button onClick={() => toggleCart()} className="cart-button">
                {emptyCart ? <RiShoppingCartLine size={30}/> : <RiShoppingCartFill size={30}/>}
            </button>
            <ShoppingCart /> 
        </>
    )
}

export default ShoppingCartButton