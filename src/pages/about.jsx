import * as React from "react"
import styled from 'styled-components'
import SEO from "../components/SEO/Seo"

const AboutPageStyles = styled.div`
  background-color: var(--peacock);
  height: 100%;
`

const AboutPage = () => (
  <AboutPageStyles>
    <SEO title="About Us" />
    <section className="container">
      <h1> OH HAI</h1> 
    </section>
  </AboutPageStyles>
   
)


export default AboutPage
