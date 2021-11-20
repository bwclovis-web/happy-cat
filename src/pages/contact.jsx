import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Accordion from "../components/Accordion/Accordion"
import HeroComponent from "../components/Hero/Hero"
import data from '../Data/faq.json'
import SEO from "../components/SEO/Seo"
import StyledSixty from "../components/Containers/Sixty/SixtyStyled"
import ContactUsForm from "../components/Forms/ContactForm/ContactForm"

const ContactUsStyles = styled.div`
  background-color: var(--cayman);
  height: 100vh;

  .container {
    padding-top: 4rem;
  }

  .contact-hero {
    color: var(--cayman);

    p {
      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: .2rem;
    }
  }
`

const ContactPage = () => {
  const imageQuery = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: {eq: "sonic.jpg"}) {
          childImageSharp{
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = [imageQuery.image.childImageSharp.fluid, 
    `linear-gradient(rgba(9, 13, 13, 0.9), rgba(9, 13, 13, 0.53))`
  ].reverse()
  return (
    <ContactUsStyles>
      <SEO title="contact us" />
        <HeroComponent data={imageData} size='40' className='contact-hero'>
        <section className='container'>
          <h1>Contact Us</h1>
          <p>Have a question, comment, request? Let us know. Please check out the FAQ's below. </p>
          </section>
        </HeroComponent>

      <StyledSixty className='container'>
        <section>
          <h2>F.A.Q's</h2>
          <Accordion data={data}/>
        </section>
        <section>
          <ContactUsForm />
        </section>
      </StyledSixty>
    </ContactUsStyles>
    
  )
}
 


export default ContactPage
