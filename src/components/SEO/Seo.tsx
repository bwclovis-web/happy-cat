

import * as React from "react"
import { SeoI } from './interfaces'
import { graphql, useStaticQuery } from "gatsby"
import { formatTitle } from './utility'
import { Helmet } from "react-helmet"

const SEO: React.FC<SeoI> = ({ children, description, location, title, image }) => {
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
