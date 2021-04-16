import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {makeStyles} from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'


const withStyles = makeStyles( () => ({
  navBarRoot: {
      position: "fixed",
      display: "flex",
      background: "#001841",
      justifyContent: "space-between",
      width: "100%",
      top: 0,
      boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
      zIndex: "1"
  },
  navBarTitle:{
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navButton: {
    color: "white",
    textTransform: "none"
  }
}))


const Header = ({ siteTitle }) => {
  
  const classes = withStyles();
  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navBarTitle}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{color: `white`,textDecoration: `none`}}>
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
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
