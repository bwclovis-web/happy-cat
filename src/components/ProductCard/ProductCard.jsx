import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"
import Button from "../Button/Button"

const ProductCard = ({product}) => {
    const image = product?.featuredImage?.gatsbyImageData ? 
        getImage(product.featuredImage.gatsbyImageData) :
        getImage(product?.image?.gatsbyImageData)

    return (
        <StyledProductCard to={`/shop/${product.handle}`} key={product.id}>
            <div className="overlay">
                <Button 
                    scHidden={true} 
                    tabIndex="-1" 
                    config="default"
                    size="lg"
                >
                    View Details
                </Button>
            </div>
            <GatsbyImage image={image} alt={''} />
            <p className="title">{product.title}</p>
        </StyledProductCard>
    )
}

export default ProductCard