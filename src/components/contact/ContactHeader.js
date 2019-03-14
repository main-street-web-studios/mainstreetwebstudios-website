import React from "react"
import styled from "styled-components"

export default () => {
  const ContactHeader = styled.section`
    font-family: "Noto Sans";
    margin-bottom: 0rem;
    h2 {
      font-family: "Oswald";
      font-size: 2rem;
      font-weight: 700;
      padding: 0.5rem 0;
      padding-top: 0;
    }
  `

  return (
    <ContactHeader>
      <h2>Contact Us</h2>
      <p>
        We would love to set up a time to talk about creating your new website.
        Let us hear from you!
      </p>
    </ContactHeader>
  )
}
