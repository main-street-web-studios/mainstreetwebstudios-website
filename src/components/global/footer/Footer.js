import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { Link } from "gatsby"

export default class Footer extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/what-we-do/",
        name: "what we do",
      },
      {
        id: 1,
        path: "/story/",
        name: "our story",
      },
      {
        id: 2,
        path: "/testimonials/",
        name: "testimonials",
      },
    ],
  }

  render() {
    const { links } = this.state
    return (
      <FooterWrapper>
        <div id="footer-content">
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
          </div>

          <p id="copyright">
            &copy;{new Date().getFullYear()} Main Street Web Studios
          </p>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${styles.colors.black};
  color: ${styles.colors.lightGrey};
  font-family: "Noto Sans";
  border-top: 0.25rem solid ${styles.colors.primary};
  #footer-content {
    max-width: 65rem;
    padding: 1rem 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  #main {
    display: flex;
    align-items: space-between;
    > * {
      flex-grow: 1;
      flex-shrink: 1;
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
    padding: 0.1rem 0.25rem;
  }
  #copyright {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`
