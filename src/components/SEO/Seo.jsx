

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { formatTitle } from './utility'
import { Helmet } from "react-helmet"

const SEO = ({ description, location, title, image }) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
      )

    const defaultTitle = site.siteMetadata?.title;
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet 
          htmlAttributes={{
            lang: 'en',
          }}
          title={formatTitle(title)}
          titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
          meta={[
              {
                  name: `description`,
                  content: metaDescription,
              },
              {
                  property: `og:title`,
                  content: title,
              },
              {
              property: `og:description`,
              content: metaDescription,
              },
              {
              property: `og:type`,
              content: `website`,
              },
            ]}
        />
    )
}
export default SEO
