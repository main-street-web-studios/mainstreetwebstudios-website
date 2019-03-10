import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"

export default class Footer extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/what-we-do",
        name: "what we do",
      },
      {
        id: 1,
        path: "/story",
        name: "our story",
      },
      {
        id: 2,
        path: "/contact",
        name: "contact us",
      },
    ],
  }

  render() {
    const { links } = this.state
    return (
      <FooterWrapper>
        <div id="main">
          <ul className="nav">
            {links.map(link => (
              <li className="nav" key={link.id}>
                <Link className="nav-link" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/*<div>
            <div id="input">
              <input type="text" defaultValue="" placeholder="Email Address" />
            </div>
            <Button variant="contained" className="btn">
              Subscribe
            </Button>
          </div>*/}
        </div>
        <p id="copyright">
          &copy;{new Date().getFullYear()} Main Street Web Studios
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  width: 100%;
  background: ${styles.colors.black};
  color: ${styles.colors.lightGrey};
  font-family: "Noto Sans";
  padding: 1rem 1.5rem;
  border-top: 0.25rem solid ${styles.colors.primary};
  #main {
    display: flex;
    align-items: space-between;
    > * {
      flex-grow: 1;
    }
  }
  #input {
    background: ${styles.colors.white};
    border-radius: 3px;
    margin: 0.5rem 0;
    > input {
      display: block;
      width: 100%;
      border: none;
      background: none;
      padding: 0.8rem 0.5rem;
      font-size: 1rem;
    }
  }
  ul.nav {
    text-align: right;
  }
  li.nav {
    font-size: 1rem;
    list-style: none;
    margin-top: 0.5rem;
    &:nth-of-type(1) {
      margin-top: 0;
    }
  }
  .nav-link {
    color: ${styles.colors.lightGrey};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
  .btn {
    font-weight: 700;
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 2rem;
    background: ${styles.colors.primary};
    color: ${styles.colors.white};
    margin: 0.5rem 0;
  }
  #copyright {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`
