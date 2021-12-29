import React, {useContext} from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CartContext from "../provider/provider";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton"
import SEO from "../components/SEO/Seo"
import StyledSixty from "../components/Containers/Sixty/SixtyStyled";


export default function ProductPage({ data: { product } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const {client} = useContext(CartContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)
  const productVariant = client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const handleOnClick = () => {
    console.log('clicked')
  }

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
      <SEO title={product.title}/>
      <article className="container">
      <StyledSixty>
        <section>
          <GatsbyImage image={image} alt={''} />
        </section>

        <section>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* <p>{product.price.formatted_with_symbol}</p> */}
          <AddToCartButton varId={productVariant.storefrontId} available={available}/>
        </section>
      </StyledSixty>
      </article>
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
