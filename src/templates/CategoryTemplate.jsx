import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO/Seo"
import DataGrid from "../components/Containers/ProductGrid/DataGrid";

const CategoryPage = ({ data: { collection } }) => (
    <>
      <Seo title={collection.title}/>
      <article className="container">
        <h1>{collection.title}</h1>
        <DataGrid data={collection.products}/>
      </article>
    </>
);

export default CategoryPage;

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
            variants {
              availableForSale
            }
        }
    }
}
`;
