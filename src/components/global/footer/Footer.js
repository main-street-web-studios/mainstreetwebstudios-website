import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Footer extends Component {
  render() {
    return <FooterWrapper>Footer</FooterWrapper>
  }
}

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${styles.colors.black};
  color: ${styles.colors.lightGrey};
  font-family: "Noto Sans";
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
`
