import * as React from "react"
import CartContext from "../../provider/provider";

const AddToCartButton = ({varId, available}) => {
    const { addVariantToCart, loading } = React.useContext(CartContext)

    const addToCart = () => {
        addVariantToCart(varId, 1)
    }

    return (
        <button
          type="submit"
          onClick={addToCart}
          disabled={!available || loading}
        >
          {available ? "Add to Cart" : "Out of Stock"}
        </button>
      )
}
export default AddToCartButton