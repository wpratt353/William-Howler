import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <SEO title='Home' />
      <Header />
      <Hero />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
