/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles} from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"

const withStyles = makeStyles(() => ({
    layoutRoot: {
      display: "flex",
      flexDirection: "column"
    },
    mainContent: {
      flexGrow: 1
    },
    footerRoot:{
      background: "#001841",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      height: "50px"
    },
    copyrightText: {
      margin: "auto"
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
          <p className={classes.copyrightText}> © {new Date().getFullYear()}, PH Pool & Spa Service</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
