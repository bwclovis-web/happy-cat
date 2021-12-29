import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { Link } from "gatsby"

const ProductCard = ({product}) => {
    console.log(product)
    const image = getImage(product.featuredImage.gatsbyImageData)
    const bgImage = convertToBgImage(image)

    return (
       <div>
            <Link to={`/shop/${product.handle}`}>
                <BackgroundImage
                    Tag="div"
                    {...bgImage}
                    style={{
                        position: "relative",
                        top: 0,
                        width: '100%',
                        height: `50vh`,
                        backgroundSize: 'cover',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <p>{product.title}</p>
                </BackgroundImage>
            </Link>
       </div>
        
    )
}

export default ProductCard