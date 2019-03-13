import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/work/",
        name: "work",
      },
      {
        id: 4,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    const { open, toggleMenu } = this.props
    const { links } = this.state
    return (
      <NavbarLinksWrapper open={open}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <Link
                activeClassName="active-nav-link"
                to={link.path}
                className="nav-link"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </NavbarLinksWrapper>
    )
  }
}

const NavbarLinksWrapper = styled.ul`
  background: white;
  width: ${props => (props.open ? "45%" : "0")};
  right: 0;
  height: 100vh;
  z-index: 999;
  top: 0;
  bottom: 0;
  padding-top: 65px;
  box-shadow: ${props =>
    props.open ? "0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.2)" : "none"};
  transition: ${styles.transitions.standard};
  overflow: hidden;
  li {
    list-style: none;
    &:nth-of-type(1) > .nav-link {
      border-top: none;
    }
  }
  .nav-link {
    transition: ${styles.transitions.standard};
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-family: "Noto Sans";
    text-transform: uppercase;
    text-align: left;
    font-weight: 700;
    background: ${styles.colors.white};
    color: ${styles.colors.black};
    transition: ${styles.transitions.standard};
    &:hover {
      background: ${styles.colors.lightGrey};
    }
  }
  .active-nav-link {
    color: ${styles.colors.darkGrey};
  }
  position: absolute;
  @media (min-width: 768px) {
    background: none;
    width: auto;
    position: relative;
    box-shadow: none;
    height: auto;
    display: flex;
    padding: 0.5rem 1.5rem;
    li:nth-of-type(1) > .nav-link {
      margin-left: 0;
    }
    .nav-link {
      padding: 0.1rem 0.25rem;
      margin-left: 1.5rem;
      color: ${styles.colors.white};
      background: transparent;
      border-top: none;
      border-bottom: 0.1rem solid transparent;
      &:hover {
        background: transparent;
        border-color: ${styles.colors.white};
      }
    }
    .active-nav-link {
      border-color: ${styles.colors.white};
    }
  }
`
