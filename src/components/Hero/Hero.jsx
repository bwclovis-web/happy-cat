import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import StyledHeroContainer from "./StyledHeroContainer"
const HeroComponent = ({data, size, heading, className}) => (
    <BackgroundImage
      Tag="section"
      fluid={data}
      backgroundColor={`#040e18`}
      className={className}
      style={{
          position: "relative",
          top: 0,
          width: '100%',
          height: `${size}vh`,
          backgroundSize: 'cover',
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }}
    >
      <StyledHeroContainer>
        <h1>{heading}</h1>
      </StyledHeroContainer>
    </BackgroundImage> 
)

export default HeroComponent
