import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/SEO/Seo"

const AboutPageStyles = styled.div`
  background-color: var(--peacock);
  height: 100%;
`

const AboutPage = () => (
  <AboutPageStyles>
    <Seo title="About Us" />
    <section className="container">
      <h1> OH HAI</h1> 
    </section>
  </AboutPageStyles>
   
)


export default AboutPage
