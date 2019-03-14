import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./global/navbar/Navbar"
import Footer from "./global/footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div id="nav-and-content">
        <Navbar />
        <div id="page-content">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }
  body {
    position: relative;
    overflow-y: auto;
    background: white;
    overflow-x: hidden;
  }
  #nav-and-content {
    min-height: 100vh;
    position: relative;
    padding-bottom: 160px;
    display: flex;
    flex-direction: column;
  }
  #page-content {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    > * {
      flex: 1 1 0;
    }
  }
  @media (min-width: 768px) {
    body {
      overflow-y: auto !important;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
