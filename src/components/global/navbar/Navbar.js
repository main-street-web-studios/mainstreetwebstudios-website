import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

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
        <NavbarHeader open={open} toggleMenu={this.toggleMenu} />
        <NavbarLinks open={open} />
      </NavbarWrapper>
    )
  }
}

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.4);
  }
`
