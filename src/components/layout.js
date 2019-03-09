import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./global/navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans");
  @import url("https://fonts.googleapis.com/css?family=Oswald");
  @import url("https://fonts.googleapis.com/css?family=Staatliches");
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
