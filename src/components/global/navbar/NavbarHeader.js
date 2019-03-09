import React, { Component } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { toggleMenu } = this.props
    return (
      <NavbarHeaderWrapper>
        <Link id="company-logo" to="/">
          <h1>Main Street Web Studios</h1>
        </Link>
        <FaBars id="menu-btn" onClick={toggleMenu} />
      </NavbarHeaderWrapper>
    )
  }
}

const NavbarHeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  #company-logo {
    color: black;
    text-decoration: none;
    font-family: "Oswald";
    h1 {
      font-size: 1.25rem;
    }
  }
  #menu-btn {
    font-size: 1.25rem;
    color: #70f;
    @media (min-width: 768px) {
      display: none;
    }
  }
`
