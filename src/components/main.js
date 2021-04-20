import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ContactForm from './contactForm'
import Button from '@material-ui/core/Button'
import liner1 from '../images/ph_liner_install_done.jpeg'
import liner2 from '../images/ph_pool_kids.jpeg'
import liner3 from '../images/ph_pool_liner_1.jpeg'
import liner4 from '../images/ph_liner_river_2.jpeg'
import poolVacuum from '../images/pool_cleaning.jpg'
import poolPump from '../images/pool_pump.jpg'
import poolHeated from '../images/pool_heated.jpg'
import poolLights from '../images/pool_lights.jpg'
import poolSafety from '../images/pool_safety2.jpg'
import riverPhoto from '../images/ph_river_large.jpeg'
import imageBlurOverlay from '../images/overlay1.png'
import poolWaterfall from '../images/swimming-pool-banner_cropped.jpg'
import Divider from '@material-ui/core/Divider'

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
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    aboutWrapper: {
        display:"flex",
        margin: "auto",
        margin: "20px",
        color: "white",
        "@media(max-width: 600px)":{
            flexDirection: "column"
        }
    },
    servicesTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutSectionWrapper:{
        display: "flex", 
        width: "50%", 
        flexDirection: "column",
        "@media(max-width: 600px)":{
            width: "100%"
        }
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black"
    },
    aboutTextWrapper: {
        display:"flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px"
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        "@media(max-width: 600px)":{
            width: "100%"
        }
    },
    servicesText: {
        color: "white"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        fontSize: "2rem",
        color: "#001841",
        padding: "10px",
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px"
    },
    landingMessageText: {
        color: "white",
        background: "#1c6cc2",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "100",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        margin: "auto"
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "#001841"
    },
    serviceSummary: {
        color: "#001841",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        marginBottom: "2em"
    },
    serviceWrapper: {
        background: "white",
        paddingTop: "2.5em"
    },
    scrollToAbout: {
        height: "80px", 
        background: "white"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    servicesCard: {
        width: "calc(33.33333% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        "@media(max-width: 980px)":{
            width: "calc(50% - 2.5em)"
        },
        "@media(max-width: 736px)":{
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        width: "calc(33.33333% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        "@media(max-width: 980px)":{
            width: "calc(50% - 2.5em)"
        },
        "@media(max-width: 736px)":{
            width: "100%",
            margin: "1.25em 0 0 0"
        },
        "@media(max-width: 600px)":{
            display: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "center",
        color: "white",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    }
}))

const Main = () => {
    const classes = withStyles();
    const {mobileImage, desktopImage, aboutImage, mobileAboutImage} = useStaticQuery(graphql`
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
      aboutImage: file(relativePath: { eq: "ph_river_large.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      mobileAboutImage: file(relativePath: { eq: "ph_river_large.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  const sources = [
    desktopImage.childImageSharp.fluid,
    {
      ...mobileImage.childImageSharp.fluid,
      media: `(min-width: 650px)`
    },
    aboutImage.childImageSharp.fluid,
    {
      ...mobileAboutImage.childImageSharp.fluid,
      media: `(min-width: 650px)`
    }
  ]


    return (
        <div className={classes.mainRoot}>
            <BackgroundImage
                fluid={sources[0]} 
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
            
            <span style={{marginBottom: "80px"}} id="services"></span>

            <div className={classes.serviceWrapper}>   
                <Typography className={classes.someOfWorkHeader}>Custom Renovations, Repairs, and Service</Typography>
                <Divider className={classes.serviceDivider}/>
                <Typography className={classes.serviceSummary}>From basic maintenance to complete pool renovations, we have you covered.</Typography>
                <div className={classes.servicesListWrapper}>
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={liner4} alt="pool with cover"/>
                            <Typography className={classes.servicesCardText}>Pool Opening & Closing</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={poolVacuum} alt="pool with vacuum"/>
                            <Typography className={classes.servicesCardText}>Pool Equipment Sales</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={poolHeated} alt="woman in pool"/>
                            <Typography className={classes.servicesCardText}>Pool & Spa Heating Systems</Typography>
                        </CardContent>
                    </Card>    
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={liner1} alt="pool liner install"/>
                            <Typography className={classes.servicesCardText}>Pool Liners</Typography>
                        </CardContent>
                    </Card>  
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={poolLights} alt="pool at night"/>
                            <Typography className={classes.servicesCardText}>Pool & Spa Lighting</Typography>
                        </CardContent>
                    </Card> 
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={poolPump} alt="pool pump"/>
                            <Typography className={classes.servicesCardText}>Pump Installation/Maintenance</Typography>
                        </CardContent>
                    </Card> 
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={liner3} alt="pool cover"/>
                            <Typography className={classes.servicesCardText}>Safety Covers</Typography>
                        </CardContent>
                    </Card> 
                    <Card className={classes.servicesCard}>
                        <CardContent className={classes.servicesCardContent}>
                            <img className={classes.servicesCardImage} src={liner2} alt="child swimming"/>
                            <Typography className={classes.servicesCardText}>Pool Inspections & Safety Assessments</Typography>
                        </CardContent>
                    </Card>    
                    <Card className={classes.servicesCardLast}>
                        <CardContent className={classes.servicesCardContent}>
                            <Typography className={classes.servicesCardText}></Typography>
                        </CardContent>
                    </Card>                
                </div>
            </div>
            <span className={classes.scrollToAbout} id="about"></span>
            {/* <BackgroundImage
                fluid={sources[2]} 
                className={classes.aboutBackgroundImage} 
            > */}
                <div className={classes.aboutWrapper}>
                    <div className={classes.aboutSectionWrapper}>
                        <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                        <div className={classes.aboutTextWrapper}>
                            <p className={classes.aboutText}>PH Pool & Spa Service has been serving the Rochester, New York and surrounding areas since 1989.</p>
                            <p className={classes.aboutText}>We specialize in liner replacement for inground pools, but also offer service, renovation and repair for inground pools and spas of all types and sizes.</p>
                            <p className={classes.aboutText}>Our highly trained and experienced staff members strive to deliver the highest quality work.</p>
                            <p className={classes.aboutText}>Call the proven professionals today! We’ll leave you wondering why you didn’t call sooner.</p>
                        </div>
                    </div>
                    <img className={classes.aboutImage} src={riverPhoto} alt="photo of a river"/>
                </div>
            {/* </BackgroundImage> */}

            <div id="contactForm">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Main
