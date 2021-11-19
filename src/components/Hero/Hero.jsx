import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
const HeroComponent = ({data, size, children, className}) => (
    <BackgroundImage
      Tag="section"
      fluid={data}
      backgroundColor={`#040e18`}
      className={className}
      style={{
          position: "relative",
          top: 0,
          width: '100vw',
          height: `${size}vh`,
          backgroundSize: 'cover',
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }}
    >
      {children}
    </BackgroundImage> 
)

export default HeroComponent
