import React, {useContext} from "react"
import { formatPrice } from "../../lib/formatPrice";
import StyledToast from "./StyledToast";

const Toast = ({item, display}) => {
    const {amount, currencyCode} = item.priceRangeV2.maxVariantPrice;
    const itemPrice = formatPrice(amount,currencyCode);

    return (
        <StyledToast display={display}>
            <p>{item.title} has been added to cart</p>
            <p>Price: {itemPrice}</p>
        </StyledToast>
    )
}

export default Toast; 