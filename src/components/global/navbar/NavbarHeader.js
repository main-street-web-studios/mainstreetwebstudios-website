import React, { Component } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { toggleMenu, open } = this.props
    return (
      <NavbarHeaderWrapper open={open}>
        <Link id="company-logo" to="/">
          <h1>Main Street Web Studios</h1>
        </Link>
        <FaBars id="menu-btn" onClick={toggleMenu} />
      </NavbarHeaderWrapper>
    )
  }
}

const NavbarHeaderWrapper = styled.div`
  position: relative;
  z-index: 1100;
  box-shadow: 0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  #company-logo {
    color: ${styles.colors.black};
    text-decoration: none;
    font-family: "Oswald";
    h1 {
      font-size: 1.25rem;
    }
  }
  #menu-btn {
    font-size: 1.25rem;
    color: ${styles.colors.secondary};
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    box-shadow: none;
  }
`
