import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    open: false,
  }

  toggleMenu = (open = !this.state.open) => {
    this.setState({
      open,
    })
  }

  render() {
    const { open } = this.state
    return (
      <NavbarWrapper>
        <NavbarHeader toggleMenu={this.toggleMenu} />
        <NavbarLinks open={open} />
      </NavbarWrapper>
    )
  }
}

const NavbarWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
