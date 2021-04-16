import * as React from "react"
import { Link } from "gatsby"
import Main from "../components/main"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

  const {mobileImage, desktopImage} = useStaticQuery(graphql`
  query {
    desktopImage: file(relativePath: { eq: "swimming-pool-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileImage: file(relativePath: { eq: "swimming-pool-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 650px)`
    }
  ]

  return (
    <Layout>
    <SEO title="Home" />
    <Main/>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
  )
}

export default IndexPage
