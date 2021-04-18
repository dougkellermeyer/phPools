import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ContactForm from './contactForm'
import kidsPoolImage from '../images/ph_pool_kids.jpeg'
import liner1 from '../images/ph_liner_install_done.jpeg'
import liner2 from '../images/ph_liner_2_river.jpeg'
import liner3 from '../images/ph_liner2_install.jpeg'

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
        "@media(max-width: 650px)":{
            height: "calc(100vh - calc(100vh -100%))",
        }
    },
    landingWrapper: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    bannerImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    aboutWrapper: {
        display:"flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "20px",
        color: "white"
    },
    servicesTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px",
        color: "black"
    },
    aboutTextWrapper: {
        display:"flex",
        flexDirection: "column",
    },
    aboutText: {
        color: "black"
    },
    servicesText: {
        color: "white"
    },
    projectImage: {
        width: "400px",
        margin: "10px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "#001841"
    },
    someOfWorkHeader: {
        background: "#001841",
        textAlign: "center",
        fontSize: "2rem",
        color: "white",
        padding: "20px"
    },
    landingMessageWrapper: {
        display: "flex",
        margin: "auto",
        marginLeft: "0px",
        marginRight: "0px",
        textTransform: "uppercase",
        background: "gray",
        opacity: "0.85",
        height: "150px"
    },
    landingMessageText: {
        color: "white",
        fontSize: "3.0em",
        fontWeight: "100",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        margin: "auto"
    }
}))

const Main = () => {
    const classes = withStyles();
    const {mobileImage, desktopImage} = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "water3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "water3.jpg" }) {
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
                style={{
                    // backgroundPositionY: '90px',
                }}
                
            >
                <div className={classes.landingWrapper}>
                    <div className={classes.landingMessageWrapper}>
                        <Typography className={classes.landingMessageText}>Rochester's Top Choice in Pools & Spa</Typography>
                    </div>
                </div>
            </BackgroundImage>
            <Typography className={classes.someOfWorkHeader}>Some of our Work</Typography>
            <div className={classes.imageWrapper}>
                <img className={classes.projectImage} src={liner2} alt="pool by a river"></img>
                <img className={classes.projectImage} src={liner1} alt="pool playing in pool"></img>
                <img className={classes.projectImage} src={liner3} alt="pool liner install"></img>
            </div>
            <span style={{height: "80px", background: "#001841"}} id="about"></span>
            <div className={classes.aboutWrapper}>
                <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                <div className={classes.aboutTextWrapper}>
                    <p className={classes.aboutText}>At PH Pool & Spa Service, we have the expertise and experience in repairing and renovating your pool or spa in the Rochester NY area. </p>
                    <p className={classes.aboutText}>Whether you’re in need of repairs, service, pool liners or a major renovation, you’ll find a team of experienced pool and spa specialists who are dedicated to making your project a success.</p>
                    <p className={classes.aboutText}>We specialize in liner replacement for inground pools, as well as sales, service and renovations. Call today or stop by and talk with one of our friendly associates!</p>
                </div>
            </div>
            <span style={{marginBottom: "80px"}} id="services"></span>
            <div className={classes.servicesWrapper}>
                <div className={classes.aboutWrapper}>
                    <Typography className={classes.servicesTitleHeader}>Services</Typography>
                    <div className={classes.aboutTextWrapper}>
                        <p className={classes.servicesText}>At PH Pool & Spa Service, we have the expertise and experience in repairing and renovating your pool or spa in the Rochester NY area. </p>
                        <p className={classes.servicesText}>Whether you’re in need of repairs, service, pool liners or a major renovation, you’ll find a team of experienced pool and spa specialists who are dedicated to making your project a success.</p>
                        <p className={classes.servicesText}>We specialize in liner replacement for inground pools, as well as sales, service and renovations. Call today or stop by and talk with one of our friendly associates!</p>
                    </div>
                </div>
            </div>
            <div id="contactForm">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Main
