import * as React from "react"
import Seo from "../components/SEO/Seo"
import { graphql, useStaticQuery } from "gatsby"
import DataGrid from "../components/Containers/ProductGrid/DataGrid"

const ShopPage = () => {
  const pageQuery = useStaticQuery(
    graphql`
      query {
        allProducts: allChecProduct {
          edges {
            node {
              id
              active
              name
              price {
                formatted_with_symbol
              }
              description
              permalink
              updated
              images {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              categories {
                name
                slug
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
      <section className="container">
        <h1>Whats in the Shop</h1>
        <DataGrid data={pageQuery.allProducts.edges}/>
      </section> 
    </>
  )
}


export default ShopPage
