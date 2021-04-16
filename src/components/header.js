import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {makeStyles} from '@material-ui/core'

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
  }
}))


const Header = ({ siteTitle }) => {
  
  const classes = withStyles();
  return (
    <header
      className={classes.navBarRoot}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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
