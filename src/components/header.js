import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {makeStyles} from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import logoBlack from '../images/default-monochrome-black.svg'


const withStyles = makeStyles( () => ({
  navBarRoot: {
      position: "fixed",
      display: "flex",
      background: "white",
      justifyContent: "space-between",
      width: "100%",
      top: 0,
      boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
      zIndex: "1",
      opacity: "0.85"
  },
  navBarTitle:{
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navButton: {
    color: "#001841",
    textTransform: "none"
  },
  navBarButtonWrapper: {
    display: "flex"
  },
  navLogo: {
    display: "flex",
    width: "250px",
    margin: "auto"
  }
}))


const Header = ({ siteTitle }) => {
  
  const classes = withStyles();
  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navBarTitle}>
          <Link to="/" style={{color: '#001841',textDecoration: `none`}}>
            <img className={classes.navLogo} src={logoBlack} alt="ph pool logo black"/>
          </Link>
      </div>
      <div className={classes.navBarButtonWrapper}>
            <Button 
              className={classes.navButton}
              onClick={() => scrollTo('#about')}
            
            >
              About Us
            </Button>
            <Button 
              className={classes.navButton}
              onClick={() => scrollTo('#services')}
            
            >
              Services
            </Button>
            <Button 
              className={classes.navButton}
              onClick={() => scrollTo('#contactForm')}
            
            >
              Contact Us
            </Button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
