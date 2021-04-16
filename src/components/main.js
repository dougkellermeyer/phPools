import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        minHeight: "100vh",
        "@media(max-width: 650px)":{
            height: "calc(100vh - calc(100vh -100%))",
        }
    },
    bannerImage: {
        width: "100%"
    }
}))

const Main = () => {
    const classes = withStyles();
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
        <div className={classes.mainRoot}>
        <BackgroundImage
            fluid={sources} 
            className={classes.bannerImage} 
        >
            <div style={{height: "500px"}}></div>
        </BackgroundImage>
            
        </div>
    )
}

export default Main
