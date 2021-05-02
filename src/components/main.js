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
import liner3 from '../images/liner_drone.jpg'
import liner4 from '../images/ph_liner_2_river.jpeg'
import liner5 from '../images/liner_install_1.jpeg'
import liner6 from '../images/liner6.jpeg'
import linerFlower from '../images/liner_flower.jpg'
import bbbLogo from '../images/AB-seal-horz.svg'
import poolVacuum from '../images/pool_cleaning.jpg'
import poolPump from '../images/pool_pump.jpg'
import poolEquipmentSales from '../images/poolEquipmentSales.jpg'
import phBizCard from '../images/phBizCard.jpeg'
import poolSafety from '../images/pool_safety2.jpg'
import riverPhoto from '../images/deckCreek.jpg'
import imageBlurOverlay from '../images/overlay1.png'
import poolWaterfall from '../images/swimming-pool-banner_cropped.jpg'
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Avatar from '@material-ui/core/Avatar'
import StarRateIcon from '@material-ui/icons/StarRate';
import "./main.css"

const withStyles = makeStyles(() => ({
    "@global":{
        "*":{
            fontFamily: "Raleway, sans-serif !important"
        }
    },
    mainRoot: {
        display: "flex",
        flexDirection: "column"
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "65vh",
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
        marginBottom: "50px",
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
        fontWeight: "bold",
        color: "white"
    },
    aboutTextWrapper: {
        display:"flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p":{
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
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
        fontWeight: "bold",
        color: "white",
        padding: "10px",
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "15%",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)":{
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "100",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "100",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        margin: "auto",
        "@media(max-width: 600px)":{
            display: "none"
        }
    },
    landingPageSubHeaderMobile:{
        display: "none",
        "@media(max-width: 600px)":{
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            fontFamily: "Raleway, sans-serif",
            textAlign: "center",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceSummary: {
        color: "white",
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        marginBottom: "2em",
        fontSize: "1.25rem"
    },
    servicesBulletsWrapper: {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontFamily: "Raleway, sans-serif",
        margin: "20px"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToAbout: {
        height: "80px", 
        background: "#3587de"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)":{
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)":{
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
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
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    contactHeader: {
        fontSize: "2.0rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 600px)":{
            flexDirection: "column",
            textAlign: "center"
        }
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Raleway, sans-serif",
    },
    contactButton: {
        margin:"20px",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "#333333",
        borderRadius: "35px",
        padding:"15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: "#001841",
          boxShadow: 'none',
          cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    reviewButton: {
        backgroundColor: "#b8d1ed",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px"
    },
    reviewHeader: {
        fontSize: "1.2rem",
        color: "#333333",
        fontWeight: "bold",
        textTransform: "none"
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    reviewLink: {   
        textDecoration:"none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:"#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)":{
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)":{
            flexDirection: "column",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight:"10px",
        fontFamily: "proxima-nova, Helvetica, Arial, sans-serif",
        borderRadius:  "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
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

  const FiveStar = () => {
      return (
        <div className={classes.fiveStar}>
            <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/>
        </div>
      )
  }


    return (
        <div className={classes.mainRoot}>
            <section class="py-5 section-bubble1">
                <div class="container">
                    <div className={classes.landingWrapper}>
                        <div className={classes.landingMessageWrapper}>
                            <Typography className={classes.landingPageHeader}>PH Pool & Spa Service</Typography>
                            <Typography className={classes.landingPageSubHeader}>Rochester's Top Choice</Typography>
                            <Typography className={classes.landingPageSubHeaderMobile}>Rochester's</Typography>
                            <Typography className={classes.landingPageSubHeaderMobile}>Top Choice</Typography>
                        </div>
                    </div>
                </div>
            </section>
                    
            <span style={{paddingBottom: "80px", backgroundColor: "#1563b2"}} id="services"></span>
            <section class="py-5 section-bubble2">
                    <div class="container">
                        <Typography className={classes.someOfWorkHeader}>Custom Renovations, Sales and Service</Typography>
                        <Divider className={classes.serviceDivider}/>
                        <Typography className={classes.serviceSummary}>From basic maintenance to complete pool renovations, we have you covered.</Typography>
                        <div className={classes.servicesBulletsWrapper}>
                            <ul>
                                <li>Inground Pool Liner Replacements</li>
                                <li>Safety Cover Installations</li>
                                <li>Open and Close Inground Pools</li>
                                <li>Pool and Spa Equipment Sales and Service</li>
                            </ul>
                            <ul>
                                <li>Leak Detection and Underground Plumbing</li>
                                <li>Paint Gunite Pools</li>
                                <li>Major Swimming Pool Renovations</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="container">
                    <div className={classes.serviceWrapper}>   
                        <div className={classes.servicesListWrapper}>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner4} alt="pool with cover"/>
                                    <Typography className={classes.servicesCardText}>Pool Openings & Closings</Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner2} alt="child swimming"/>
                                    <Typography className={classes.servicesCardText}>Pool Inspections</Typography>
                                </CardContent>
                            </Card>  
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner6} alt="pool liner"/>
                                    <Typography className={classes.servicesCardText}>Custom Pool Liners by PH</Typography>
                                </CardContent>
                            </Card>  
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={linerFlower} alt="pool liner"/>
                                    {/* <Typography className={classes.servicesCardText}>Custom Pool Liners by PH</Typography> */}
                                </CardContent>
                            </Card>  
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner5} alt="pool liner install"/>
                                    <Typography className={classes.servicesCardText}>Major Pool Renovations</Typography>
                                </CardContent>
                            </Card> 
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner1} alt="pool liner install"/>
                                    {/* <Typography className={classes.servicesCardText}>Major Pool Renovation</Typography> */}
                                </CardContent>
                            </Card>  
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={poolEquipmentSales} alt="pool with vacuum"/>
                                    <Typography className={classes.servicesCardText}>Pool Equipment Service, Sales, and Installation</Typography>
                                </CardContent>
                            </Card>  
                            {/* <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={poolPump} alt="pool pump"/>
                                    <Typography className={classes.servicesCardText}>Pump Installation/Maintenance</Typography>
                                </CardContent>
                            </Card>  */}
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner3} alt="pool cover"/>
                                    <Typography className={classes.servicesCardText}>Safety Covers</Typography>
                                </CardContent>
                            </Card> 
                            <Card className={classes.servicesCardLast}>
                                <CardContent className={classes.servicesCardContent}>
                                    <Typography className={classes.servicesCardText}></Typography>
                                </CardContent>
                            </Card>                
                        </div>
                    </div>
                </div>
            </section>
            
            <span className={classes.scrollToAbout} id="about"></span>
            {/* <BackgroundImage
                fluid={sources[2]} 
                className={classes.aboutBackgroundImage} 
            > */}
                <section class="py-5 section-bubble3">
                    <div class="container">
                        <div className={classes.aboutWrapper}>
                            <div className={classes.aboutSectionWrapper}>
                                <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                                <div className={classes.aboutTextWrapper}>
                                    <p className={classes.aboutText}>PH Pool & Spa Service has been serving the Rochester and surrounding areas since 1989.</p>
                                    <p className={classes.aboutText}>We specialize in liner replacement for inground pools, but also offer service, renovation and repair for inground pools and spas of all types and sizes.</p>
                                    <p className={classes.aboutText}>Our highly trained and experienced staff members strive to deliver the highest quality work.</p>
                                    <p className={classes.aboutText}>Call the proven professionals today...we’ll leave you wondering why you didn’t call sooner.</p>
                                </div>
                                {/* <div className={classes.phBizCardWrapper}>
                                    <img className={classes.phBizCardImage} src={phBizCard} alt="buisness card" />
                                </div> */}

                                <div className={classes.bbbWrapper}>
                                    <a className={classes.bbbLink} href="https://www.bbb.org/us/ny/honeoye-falls/profile/pool-contractors/ph-pool-and-spa-service-0041-32357">
                                        <img className={classes.bbbImage} src={bbbLogo} alt="better business bureau logo" />
                                        <Avatar className={classes.bbbYearsCircle}>
                                            <Typography className={classes.bbbCirleText}>A+</Typography>
                                        </Avatar>
                                    </a>
                                </div>
                            </div>
                            <img className={classes.aboutImage} src={riverPhoto} alt="photo of a river"/>
                        </div>
                    </div>
                </section>

            {/* </BackgroundImage> */}
            <section class="py-5 section-bubble4">
                <div class="container">
                    <div id="contactForm">
                        <Typography className={classes.contactHeader}>Contact Us</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(585) 624-9870" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon}/>
                                    (585) 624-9870
                                </Button>
                            </a>
                            <a href="mailto:phpoolandspas@gmail.com" className={classes.emailA}>
                                <Button className={classes.contactButton}>
                                    <EmailIcon className={classes.emailIcon}/>
                                    phpoolandspas@gmail.com
                                </Button>
                            </a>
                        </div>
                        <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href="https://g.page/PHpools/review?rc" 
                                target="_blank"
                            >
                                <Button 
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>We'd Love to Hear From You</Typography>
                                        <Typography className={classes.reviewClickText}>Click here to leave us a review</Typography>
                                        <FiveStar/>
                                    </div>
                                </Button> 
                            </a>
                        </div>
                        <div className={classes.reviewCardsWrapper}>
                        <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"<b>You're the BEST!!</b> Thank you for going <b>above and beyond</b>. All your extra efforts are greatly appreciated."</i> - Ann Casey</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thank you for fixing my hot tub. You work the magic when it comes to <b>spas</b>."</i> - Beth Delplato</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thank you so much for all your hard work putting in our <b>pool liner</b>! We really appreciate you guys getting this done for us before the arrival of our baby girl! The liner looks <b>fantastic!</b> Thank you again for everything!!!"</i> - Mandy & Brian Nitsche</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thank you - the <b>liner</b> looks great! See you in the fall!"</i> - Patty Herrington </Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thanks so much for the <b>great service</b>. We are enjoying our hot tub <b>now</b>!!! We appreciate the quality workmanship and such knowledge!"</i> - Jim & Erika Roggow</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thank you for always <b>taking such great care of us!</b> We appreciate it more than you know."</i> - Jill Bishop</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"I just wanted to let you know how much we appreciated your expertise, kindness, your understanding and your patience. As you know - I've had some very difficult and negative project experiences. <b>You were the BEST!</b> You were genuine and so helpful throughout this whole process"</i> - Kathy & Eddie Wiecorek</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Thanks so much! <b>It looks fantastic</b> and if anybody can get that darn pool light to work it's you guys"</i> - The Clarks</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"<b>You're the BEST!</b> I just so appreciate the healing comfort of our hot tub. <b>Thank you for making it possible!</b>"</i> - Joan Haviland</Typography>
                            </Card>
                            <Card className={classes.reviewCard}>
                               <FiveStar/>
                               <Typography className={classes.reviewCardText}><i>"Paul & Kathy - Thanks again for the <b>special service</b>"</i> - Louie & B Carusone</Typography>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
     
        </div>
    )
}

export default Main
