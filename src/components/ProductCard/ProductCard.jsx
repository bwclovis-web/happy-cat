import * as React from "react"
import { formatPrice } from "../../lib/formatPrice"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"

const ProductCard = ({product}) => {
    const image = getImage(product.featuredImage.gatsbyImageData)

    return (
        <StyledProductCard to={`/shop/${product.handle}`} key={product.id}>
            <div className="overlay"/>
            <GatsbyImage image={image} alt={''} />
            <p className="title">{product.title}</p>
            <p className="price">{formatPrice(product.priceRangeV2.maxVariantPrice.amount, product.priceRangeV2.maxVariantPrice.currencyCode)}</p>
        </StyledProductCard>
    )
}

export default ProductCard