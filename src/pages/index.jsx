import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroComponent from "../components/Hero/Hero"
import Seo from "../components/SEO/Seo"
import DataGrid from "../components/Containers/ProductGrid/DataGrid"
import CategoryGrid from "../components/Containers/ProductGrid/CategoryGrid"


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
        categories: allShopifyCollection {
          nodes {
            id
            handle
            image {
              gatsbyImageData(height: 560)
            }
            title
          }
        }
        products: allShopifyProduct {
          nodes {
            shopifyId
            status
            featuredImage {
              gatsbyImageData(height: 840)
            }
            collections {
              handle
            }
            variants {
              availableForSale
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
  const imageData = data.image.childImageSharp.fluid

  return (
    <>
      <Seo title="Home page" />
      <HeroComponent data={imageData} size='75'heading="Welcome"/>
      
      <section style={{backgroundColor: "rebeccapurple"}}>
        <div className="container container-condensed">
          <h2 className="h1 center">Just In</h2>
          <DataGrid data={data.products.nodes}/>
        </div>
      </section>
      <section style={{backgroundColor: "tomato"}}>
        <div className="container">
          <h2 className="h1 center">Categories</h2>
          <CategoryGrid data={data.categories.nodes} />
        </div>
      </section>
    </>
  )
}


export default IndexPage
