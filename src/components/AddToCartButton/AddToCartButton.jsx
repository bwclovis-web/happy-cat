import * as React from "react"
import CartContext from "../../provider/provider";
import Button from "../Button/Button";

const AddToCartButton = ({varId, available}) => {
    const { addVariantToCart, loading } = React.useContext(CartContext)

    const addToCart = () => {
        addVariantToCart(varId, 1)
    }

    return (
        <Button
          type="submit"
          onClick={addToCart}
          disabled={!available || loading}
          submitStatus={loading}
        >
          {available ? "ADD TO CART" : "Out of Stock"}
        </Button>
      )
}
export default AddToCartButton