import React, { Component } from "react"
import { Link } from "gatsby"
import {
  FaBars as MenuIcon,
  FaTimes as CloseIcon,
  FaBuilding as LogoIcon,
} from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { toggleMenu, open } = this.props
    return (
      <NavbarHeaderWrapper open={open}>
        <Link id="company-logo" to="/">
          <LogoIcon id="logo-img" />
          <div>
            <h1>
              Main Street
              <br />
              Web Studios
            </h1>
          </div>
        </Link>
        {(() => {
          return open ? (
            <CloseIcon className="btn" onClick={toggleMenu} />
          ) : (
            <MenuIcon className="btn" onClick={toggleMenu} />
          )
        })()}
      </NavbarHeaderWrapper>
    )
  }
}

const NavbarHeaderWrapper = styled.div`
  background: ${styles.colors.primary};
  position: relative;
  z-index: 1100;
  box-shadow: 0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  #logo-img {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  #company-logo {
    color: ${styles.colors.white};
    text-decoration: none;
    font-family: "Staatliches";
    text-transform: uppercase;
    display: flex;
    align-items: center;
    h1 {
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0.1rem;
      font-size: 1rem;
    }
  }
  .btn {
    font-size: 1.5rem;
    color: ${styles.colors.white};
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    box-shadow: none;
  }
`
