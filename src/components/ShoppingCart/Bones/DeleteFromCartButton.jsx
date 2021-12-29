import React, {useContext} from "react";
import CartContext from "../../../provider/provider";

const DeleteFromCartButton = ({id}) => {
const {removeLineItem, checkout} = useContext(CartContext)
    const handleDeleteItem = () => {
        removeLineItem(checkout.id, id)
    }

    return (
        <button onClick={handleDeleteItem}>X</button>
    )
}

export default DeleteFromCartButton;