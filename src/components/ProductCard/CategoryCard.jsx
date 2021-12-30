import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"

const CategoryCard = ({product}) => {
    const image = getImage(product?.image?.gatsbyImageData)

    return (
        <StyledProductCard to={`/shop/${product.handle}`} key={product.id}>
            <div className="overlay"/>
            <GatsbyImage image={image} alt={''} />
            <p className="title">{product.title}</p>
        </StyledProductCard> 
    )
}

export default CategoryCard