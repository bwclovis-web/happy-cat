import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"

const CategoryCard = ({product}) => {
    const image = getImage(product?.image?.gatsbyImageData)

    return (
       <div>
            <StyledProductCard to={`/shop/${product.handle}`}>
                <div className="overlay"/>
                <GatsbyImage image={image} alt={''} />
                <p className="title">{product.title}</p>
            </StyledProductCard>
       </div>
        
    )
}

export default CategoryCard