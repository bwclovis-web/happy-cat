import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"

const ProductCard = ({product}) => {
    return (
       <div>
            <Link to={`/shop/${product.permalink}`}>
                <BackgroundImage
                    Tag="div"
                    fluid={product.images[0].childImageSharp.fluid}
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
                    <p>{product.name}</p>
                </BackgroundImage>
            </Link>
       </div>
        
    )
}

export default ProductCard