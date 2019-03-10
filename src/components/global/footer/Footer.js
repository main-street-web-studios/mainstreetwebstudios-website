import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaPhone as PhoneIcon, FaEnvelope as EmailIcon } from "react-icons/fa"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div id="contact">
          <div>
            <PhoneIcon className="footer-icon" />
            <p>(904) 270-9496</p>
          </div>
          <div>
            <EmailIcon className="footer-icon" />
            <p>admin@mainstreetwebstudios.com</p>
          </div>
        </div>
        <hr />
        <p id="legal">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
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
  padding: 1rem 1.5rem;
  border-top: 0.25rem solid ${styles.colors.primary};
  #contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      .footer-icon {
        font-size: 1rem;
        margin-right: 0.75rem;
      }
      &:nth-of-type(1) {
        margin-bottom: 0.75rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  hr {
    margin: 0.75rem auto;
    width: 0;
    border: none;
    border-top: 0.1rem solid ${styles.colors.primary};
  }
  #legal {
    text-align: center;
    font-size: 0.7rem;
  }
`
