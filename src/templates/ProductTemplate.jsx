import React, {useContext} from "react";
import { graphql } from "gatsby";
import Commerce from '@chec/commerce.js';
import CartContext from "../provider/provider";


export default function ProductPage({ data: { product } }) {
  const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);
  const {setItemsInCart} = useContext(CartContext)

  const handleOnClick = () => {
    commerce.cart.add(product.id).then(() => commerce.cart.contents().then((items) => setItemsInCart(items)))
  }

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
      <button onClick={handleOnClick}>OH HAI</button>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: checProduct(id: { eq: $id }) {
      id
      name
      price {
        formatted_with_symbol
      }
    }
  }
`;
