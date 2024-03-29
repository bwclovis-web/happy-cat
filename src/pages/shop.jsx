import * as React from "react"
import Seo from "../components/SEO/Seo"
import { graphql, useStaticQuery } from "gatsby"
import DataGrid from "../components/Containers/ProductGrid/DataGrid"

const ShopPage = () => {
  const pageQuery = useStaticQuery(
    graphql`
      query {
        allProducts: allShopifyProduct {
          nodes {
            shopifyId
            id
            status
            handle
            variants {
              availableForSale
            }
            collections {
              handle
            }
            featuredImage {
              gatsbyImageData(
                width: 800
                height: 1000
              )
            }
            description
            title
            priceRangeV2 {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `
  )

  return(
    <>
      <Seo title="Shop page" />
      <section className="container container-condensed">
        <h1>Whats in the Shop</h1>
        <DataGrid data={pageQuery.allProducts.nodes}/>
      </section> 
    </>
  )
}


export default ShopPage
