import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <p id="legal">
          &copy;{new Date().getFullYear()} Main Street Web Studios
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
  #legal {
    text-align: center;
    font-size: 0.9rem;
  }
`
