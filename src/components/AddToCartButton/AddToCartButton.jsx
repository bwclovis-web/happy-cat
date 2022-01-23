import * as React from "react"
import CartContext from "../../provider/provider";
import Button from "../Button/Button";

const AddToCartButton = ({varId, available, toast }) => {
    const { addVariantToCart, loading } = React.useContext(CartContext)

    const addToCart = () => {
        addVariantToCart(varId, 1)
        toast(true)
    }

    return (
        <Button
          type="submit"
          onClick={addToCart}
          disabled={!available || loading}
          submitStatus={loading}
          config="default"
          size="lg"
        >
          {available ? "ADD TO CART" : "Out of Stock"}
        </Button>
      )
}
export default AddToCartButton