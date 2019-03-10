import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Navbar extends Component {
  state = {
    open: false,
  }

  toggleMenu = () => {
    if (this.state.open) {
      document.querySelector("body").style.overflowY = "scroll !important"
    } else {
      document.querySelector("body").style.overflowY = "hidden !important"
    }
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { open } = this.state
    return (
      <NavbarWrapper open={open}>
        <div id="navbar-content">
          <NavbarHeader open={open} toggleMenu={this.toggleMenu} />
          <NavbarLinks open={open} toggleMenu={this.toggleMenu} />
        </div>
        <div id="overlay" onClick={this.toggleMenu} />
      </NavbarWrapper>
    )
  }
}

const NavbarWrapper = styled.nav`
  background: ${styles.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1000;
  #navbar-content {
    max-width: 65rem;
    margin: 0 auto;
  }
  #overlay {
    background: ${props =>
      props.open ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
    pointer-events: ${props => (props.open ? "auto" : "none")};
    transition: ${styles.transitions.standard};
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
  }
  @media (min-width: 768px) {
    box-shadow: 0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.2);
    #overlay {
      display: none;
    }
    #navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
