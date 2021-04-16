import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ContactForm from './contactForm'

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        "@media(max-width: 650px)":{
            height: "calc(100vh - calc(100vh -100%))",
        }
    },
    bannerImage: {
        width: "100%"
    },
    aboutWrapper: {
        display:"flex",
        flexDirection: "column",
        margin: "auto"
    },
    sectionTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem"
    },
    aboutTextWrapper: {
        display:"flex",
        flexDirection: "column"
    },
    aboutText: {
        color: "black"
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
                <div style={{height: "500px", display: "flex"}}></div>
            </BackgroundImage>

            <div className={classes.aboutWrapper} id="about">
                <Typography className={classes.sectionTitleHeader}>About Us</Typography>
                <div className={classes.aboutTextWrapper}>
                    <p className={classes.aboutText}>At PH Pool & Spa Service, we have the expertise and experience in repairing and renovating your pool or spa in the Rochester NY area. </p>
                    <p className={classes.aboutText}>Whether you’re in need of repairs, service, pool liners or a major renovation, you’ll find a team of experienced pool and spa specialists who are dedicated to making your project a success.</p>
                    <p className={classes.aboutText}>We specialize in liner replacement for inground pools, as well as sales, service and renovations. Call today or stop by and talk with one of our friendly associates!</p>
                </div>
            </div>
            <div className={classes.aboutWrapper} id="services">
                <Typography className={classes.sectionTitleHeader}>Services</Typography>
                <div className={classes.aboutTextWrapper}>
                    <p className={classes.aboutText}>At PH Pool & Spa Service, we have the expertise and experience in repairing and renovating your pool or spa in the Rochester NY area. </p>
                    <p className={classes.aboutText}>Whether you’re in need of repairs, service, pool liners or a major renovation, you’ll find a team of experienced pool and spa specialists who are dedicated to making your project a success.</p>
                    <p className={classes.aboutText}>We specialize in liner replacement for inground pools, as well as sales, service and renovations. Call today or stop by and talk with one of our friendly associates!</p>
                </div>
            </div>
            <div id="contactForm">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Main
