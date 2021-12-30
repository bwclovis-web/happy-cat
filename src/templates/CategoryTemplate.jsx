import React, {useContext} from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CartContext from "../provider/provider";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton"
import SEO from "../components/SEO/Seo"
import StyledSixty from "../components/Containers/Sixty/SixtyStyled";
import DataGrid from "../components/Containers/ProductGrid/DataGrid";


export default function CategoryPage({ data: { collection } }) {
  console.log(collection)
  const {client} = useContext(CartContext)

  return (
    <>
      <SEO title={collection.title}/>
      <article className="container">
        <h1>{collection.title}</h1>
        <DataGrid data={collection.products}/>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query CategoryQuery($id: String!) {
    collection: shopifyCollection(id: { eq: $id }) {
      id
      title
      products {
            handle
            title
            featuredImage {
                gatsbyImageData
            }
            priceRangeV2 {
                maxVariantPrice {
                    amount
                    currencyCode
                }
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
        }
    }
}
`;
