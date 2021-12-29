import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroComponent from "../components/Hero/Hero"
import Seo from "../components/SEO/Seo"
import DataGrid from "../components/Containers/ProductGrid/DataGrid"


const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: {eq: "sonic.jpg"}) {
          childImageSharp{
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        products: allShopifyProduct {
          nodes {
            shopifyId
            status
            featuredImage {
              gatsbyImageData
            }
            collections {
              handle
            }
            description
            title
            handle
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

  const imageData = [data.image.childImageSharp.fluid, 
    `linear-gradient(rgba(9, 13, 13, 0.9), rgba(71, 153, 204, 0.73))`
  ].reverse()

  return (
    <>
      <Seo title="Home page" />
      <HeroComponent data={imageData} size='75'/>
      <DataGrid data={data.products.nodes}/>
    </>
  )
}


export default IndexPage
