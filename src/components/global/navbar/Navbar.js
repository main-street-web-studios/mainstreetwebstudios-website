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
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { open } = this.state
    return (
      <NavbarWrapper>
        <div id="navbar-content">
          <NavbarHeader open={open} toggleMenu={this.toggleMenu} />
          <NavbarLinks open={open} toggleMenu={this.toggleMenu} />
        </div>
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
  @media (min-width: 768px) {
    box-shadow: 0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.2);
    #navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
