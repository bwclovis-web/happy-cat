import React, {useContext} from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CartContext from "../provider/provider";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton"
import Seo from "../components/SEO/Seo"
import StyledSixty from "../components/Containers/Sixty/SixtyStyled";
import Accordion from "../components/Accordion/Accordion";
import data from '../Data/care.json'
import CollectionsList from "../components/CollectionsList/CollectionsList";

export default function ProductPage({ data: { product } }) {
  const {
    // options,
    // variants,
    variants: [initialVariant],
    // priceRangeV2,
    // title,
    // description,
    // images,
    // collections,
    images: [firstImage],
  } = product
  const {client} = useContext(CartContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  // const [quantity, setQuantity] = React.useState(1)
  const productVariant = client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailability = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  React.useEffect(() => {
    checkAvailability(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailability, product.storefrontId])


  const image = getImage(firstImage)
  return (
    <>
      <Seo title={product.title}/>
      <article className="container container-condensed">
      <StyledSixty>
        <section>
          <GatsbyImage image={image} alt={''} />
        </section>

        <section>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <AddToCartButton 
            varId={productVariant.storefrontId} 
            available={available}
          />
          <Accordion data={data} />
        </section>
      </StyledSixty>
      </article>
      <CollectionsList collections={product.collections[0]}/>
    </>
  );
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      id
      title
      description
      storefrontId
      images {
        id
        gatsbyImageData(layout: CONSTRAINED, width: 840, aspectRatio: 1)
      }
      collections {
          handle
          title
        products {
          handle
          title
          featuredImage {
            gatsbyImageData
          }
          variants {
            availableForSale
          }
        }
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
    }
  }
`;
