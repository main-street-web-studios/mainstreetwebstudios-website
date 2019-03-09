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
        path: "/about",
        name: "about",
      },
      {
        id: 2,
        path: "/work",
        name: "work",
      },
      {
        id: 4,
        path: "/contact",
        name: "contact",
      },
    ],
  }
  render() {
    const { open } = this.props
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
  width: 100%;
  z-index: 999;
  box-shadow: ${props =>
    props.open ? "0 0.1rem 0.15rem 0 rgba(0, 0, 0, 0.2)" : "none"};
  transition: ${styles.transitions.standard};
  height: ${props => (props.open ? "147px" : "0")};
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
    font-family: "Staatliches";
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 500;
    background: ${styles.colors.white};
    color: ${styles.colors.black};
    border-top: 1px solid ${styles.colors.grey};
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
    width: auto;
    position: relative;
    box-shadow: none;
    height: auto;
    display: flex;
    padding: 0.5rem 1rem;
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
