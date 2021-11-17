import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
const HeroComponent = ({data, size, children}) => (
    <BackgroundImage
      Tag="section"
      fluid={data}
      backgroundColor={`#040e18`}
      style={{
          position: "absolute",
          top: 0,
          width: '100vw',
          height: `${size}vh`,
          backgroundSize: 'cover',
      }}
    >
      {children}
    </BackgroundImage> 
)

export default HeroComponent
