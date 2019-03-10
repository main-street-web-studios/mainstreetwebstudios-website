import React from "react"
import styled from "styled-components"

import ContactHeader from "./ContactHeader"
import Form from "./Form"

export default () => {
  const Contact = styled.div`
    background: #f7f7f7;
    padding: 1.5rem;
    > div {
      max-width: 30rem;
      margin: 0 auto;
    }
  `

  return (
    <Contact className="Contact page">
      <div>
        <ContactHeader />
        <Form />
      </div>
    </Contact>
  )
}
