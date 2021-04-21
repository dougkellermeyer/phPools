import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles} from "@material-ui/core/styles"
import Header from "./header"
import Typography from '@material-ui/core/Typography'
import "./layout.css"

const withStyles = makeStyles(() => ({
    layoutRoot: {
      display: "flex",
      flexDirection: "column"
    },
    mainContent: {
      flexGrow: 1,
      minHeight: "100vh"
    },
    footerRoot:{
      background: "#333333",
      color: "white",
      display: "flex",
      minHeight: "50px"
    },
    footerContent: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      "@media(max-width: 600px)":{
        flexDirection: "column"
      }
    },
    copyrightText: {
      marginTop: "auto",
      marginBottom: "auto",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    footerPhone:{
      marginTop: "auto",
      marginBottom: "auto",
      color: "white",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    footerAddress:{
      marginTop: "auto",
      marginBottom: "auto",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    list: {
      width: "200px"
    }
})) 

const Layout = ({ children }) => {
  const classes = withStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={classes.layoutRoot}>
        <main className={classes.mainContent}>{children}</main>
        <footer className={classes.footerRoot}>
          <div className={classes.footerContent}>
            {/* <a href="tel:(585) 624-9870" className={classes.footerPhone}>(585) 624-9870</a> */}
            <p className={classes.copyrightText}> © {new Date().getFullYear()}, PH Pool & Spa Service</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
