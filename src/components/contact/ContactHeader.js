import React from "react"
import styled from "styled-components"

export default () => {
  const ContactHeader = styled.section`
    font-family: "Noto Sans";
  `

  return (
    <ContactHeader className="ContactHeader">
      <h2>Contact Us</h2>
      <p>
        We would love to set up a time to talk about creating your new website.
        Let us hear from you!
      </p>
    </ContactHeader>
  )
}
