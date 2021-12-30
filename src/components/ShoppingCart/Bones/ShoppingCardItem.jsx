import React from "react";
import DeleteFromCartButton from "./DeleteFromCartButton";
import { getShopifyImage } from "gatsby-source-shopify"
import { GatsbyImage } from "gatsby-plugin-image"

const ShoppingCartItem =({data}) => {

    const variantImage = {
        ...data.variant.image,
        originalSrc: data.variant.image.src,
      }

      const image = React.useMemo(
        () =>
          getShopifyImage({
            image: variantImage,
            layout: "constrained",
            crop: "contain",
            width: 160,
            height: 160,
          }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [variantImage.src]
      )

    return (
        <li>
         {image && (
          <GatsbyImage
            key={variantImage.src}
            image={image}
            alt={variantImage.altText ?? data.variant.title}
          />
        )}
            <div className="card-content">
              <span>{data.title}</span>
              <DeleteFromCartButton id={data.id} />
            </div>
        </li>
    )
}

export default ShoppingCartItem;