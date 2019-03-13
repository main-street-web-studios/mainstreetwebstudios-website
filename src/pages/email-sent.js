import React from "react"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import { styles } from "../utils"
// import { FaCheckCircle as CheckIcon } from "react-icons/fa"

const EmailSentPage = () => (
  <Layout>
    <SEO title="Email Sent" />
    <div>
      <EmailSentPageWrapper>
        <div id="email-sent-main">
          {/*<CheckIcon id="icon" />*/}
          <h1>Thanks!</h1>
          <p>
            Your message is on its way to us! We'll get back to you as soon as
            possible.
          </p>
        </div>
        <div id="btn-container">
          <Link to="/work/">
            <Button id="primary-btn" variant="contained">
              Our work
            </Button>
          </Link>
          <Link to="/">
            <Button id="ghost-btn" variant="outlined">
              Go Home
            </Button>
          </Link>
        </div>
      </EmailSentPageWrapper>
    </div>
  </Layout>
)

const EmailSentPageWrapper = styled.div`
  padding: 1.5rem;
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  #btn-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 15rem;
  }
  h1 {
    font-family: "Oswald";
    font-size: 7rem;
    /* line-height: 1.25; */
  }
  #icon {
    font-size: 2.5rem;
    color: ${styles.colors.grey};
  }
  p {
    font-family: "Noto Sans";
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }
  button {
    color: ${styles.colors.white};
    background: ${styles.colors.primary};
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.75rem 4rem;
    width: 100%;
    margin: 0.5rem 0;
  }
  #primary-btn {
    &:hover {
      background: ${styles.colors.primaryDark};
    }
  }
  #ghost-btn {
    background: transparent;
    border-color: ${styles.colors.black};
    color: ${styles.colors.black};
    &:hover {
      background: ${styles.colors.lightGrey};
    }
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    #btn-container {
      display: flex;
      flex-direction: row;
      width: auto;
      align-items: center;
    }
    p {
      font-size: 1.5rem;
    }
    button {
      padding: 0.75rem 0;
      width: 13rem;
      margin: 0.5rem 0.75rem;
    }
  }
`

export default EmailSentPage
