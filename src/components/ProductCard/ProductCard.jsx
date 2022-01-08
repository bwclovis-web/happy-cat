import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledProductCard from "./StyledProductCard"
import BackgroundImage from 'gatsby-background-image'
import Button from "../Button/Button"

const ProductCard = ({product}) => {
    const image = product?.featuredImage?.gatsbyImageData ? 
        getImage(product.featuredImage.gatsbyImageData) :
        getImage(product?.image?.gatsbyImageData)

    return (
        <StyledProductCard to={`/shop/${product.handle}`} key={product.id}>
            <div className="overlay">
                <Button scHidden={true} tabIndex="-1">View Details</Button>
            </div>
            <GatsbyImage image={image} alt={''} />
            <p className="title">{product.title}</p>
        </StyledProductCard>
    )
}

export default ProductCard