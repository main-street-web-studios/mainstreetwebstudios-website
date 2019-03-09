import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./global/navbar/Navbar"
import Footer from "./global/footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div id="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,700");
  @import url("https://fonts.googleapis.com/css?family=Oswald");
  @import url("https://fonts.googleapis.com/css?family=Staatliches");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab");
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }
  #container {
    min-height: 100vh;
    position: relative;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
