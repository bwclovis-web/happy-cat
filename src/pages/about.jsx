import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/SEO/Seo"
import { graphql, useStaticQuery } from "gatsby"
import HeroComponent from "../components/Hero/Hero"
import StyledSixty from "../components/Containers/Sixty/SixtyStyled"
import ProfileCard from "../components/ProfileCard/ProfileCard"

const AboutPageStyles = styled.div`
  background-color: var(--coral);
  height: 100%;
`

const AboutPage = () => {
  const imageQuery = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: {eq: "sonic.jpg"}) {
          childImageSharp{
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        profile: file(relativePath: {eq: "mandi.jpg"}) {
          childImageSharp{
            gatsbyImageData(
              width: 300             
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  
  const imageData = [imageQuery.image.childImageSharp.fluid, 
    `linear-gradient(rgba(9, 13, 13, 0.9), rgba(9, 13, 13, 0.73))`
  ].reverse()

  return(
    <AboutPageStyles>
      <Seo title="About Us" />
      <HeroComponent data={imageData} size='30' className='contact-hero'>
        <section className='container'>
          <h1>Contact Us</h1>
          </section>
        </HeroComponent>
      <StyledSixty className="container" inverted={true}>
        <ProfileCard image={imageQuery.profile.childImageSharp.gatsbyImageData}/>
        
        <section>
          <h2> OH HAI</h2>
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
            </p>
          </div>
        </section>
      </StyledSixty>
    </AboutPageStyles>
  )
}


export default AboutPage
