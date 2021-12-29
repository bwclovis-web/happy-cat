import * as React from "react"
import { formatPrice } from "../../lib/formatPrice"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"

const ProductCard = ({product}) => {
    const image = getImage(product.featuredImage.gatsbyImageData)

    console.log(product)

    return (
       <div>
            <StyledProductCard to={`/shop/${product.handle}`}>
                <div className="overlay"/>
                <GatsbyImage image={image} alt={''} />
                <p className="title">{product.title}</p>
                <p className="price">{formatPrice(product.priceRangeV2.maxVariantPrice.amount, product.priceRangeV2.maxVariantPrice.currencyCode)}</p>
            </StyledProductCard>
       </div>
        
    )
}

export default ProductCard