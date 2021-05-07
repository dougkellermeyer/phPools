import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {makeStyles} from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import logoBlack from '../images/default-monochrome-black.svg'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const withStyles = makeStyles( () => ({
  "@global":{
    "*":{
        fontFamily: "Raleway, sans-serif !important"
    }
  },
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
    display: "flex",
    margin: "10px",
    "@media(max-width: 600px)":{
      display: "none"
  }
  },
  navBarHamburgerDrawerWrapper: {
    display: "flex"
  },
  navLogo: {
    display: "flex",
    width: "250px",
    margin: "auto"
  },
  drawerItem: {
    "&:hover":{
        backgroundImage: "blue",
        border: "1px solid #979797",
        color: "black"
    },
    "&:selected:hover":{
        backgroundImage: "blue",
        border: "1px solid #979797",
        color: "black"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    "@media(min-width: 601px)":{
      display: "none"
    }
  }
}))


const Header = ({ siteTitle }) => {
  
  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)   
  }

  const handleClick = (id) => {
    let scrollToId = id
    setTimeout(() => scrollTo(scrollToId), 100)
  }

  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navBarTitle}>
          <Link to="/" style={{color: '#001841',textDecoration: `none`}}>
            <img className={classes.navLogo} src={logoBlack} alt="ph pool logo black"/>
          </Link>
      </div>
      <div className={classes.navBarHamburgerDrawerWrapper}>
        <MenuIcon 
        className={classes.hamburgerIcon}
        onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            >
            <List>
                <ListItem 
                      className={classes.drawerItem} 
                      button
                      onClick={() => handleClick('#services')}
                  >
                <ListItemText primary={"Services"} />
                </ListItem>
                <ListItem 
                    className={classes.drawerItem} 
                    button
                    // onClick={() => scrollTo('#about')}
                    onClick={() => handleClick("#about")}
                    >
                    <ListItemText primary={"About Us"}/>
                </ListItem>
                <ListItem 
                    className={classes.drawerItem} 
                    button
                    onClick={() => handleClick('#contactForm')}
                >
                <ListItemText primary={"Contact Us"} />
                </ListItem>
                <ListItem 
                    className={classes.drawerItem} 
                    button
                    onClick={() => handleClick('#contactForm')}
                >
                <ListItemText primary={"Reviews"} />
                </ListItem>
            </List>
          </div>
        </Drawer>
        <div className={classes.navBarButtonWrapper}>
          <Button 
            className={classes.navButton}
            onClick={() => scrollTo('#services')}
          
          >
            Services
          </Button>
          < Button 
              className={classes.navButton}
              onClick={() => scrollTo('#about')}
              
            >
              About Us
            </Button>
            <Button 
              className={classes.navButton}
              onClick={() => scrollTo('#contactForm')}
            
            >
              Contact Us
            </Button>
            <Button 
              className={classes.navButton}
              onClick={() => scrollTo('#contactForm')}
            
            >
              Reviews
            </Button>
          </div>
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
