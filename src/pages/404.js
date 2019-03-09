import React from "react"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import { styles } from "../utils"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundPageWrapper>
      <div id="404-main">
        <h1>Oops!</h1>
        <h2>Error code 404</h2>
        <p>The page you're trying to access doesn't exist.</p>
      </div>
      <Link to="/">
        <Button variant="contained">Go Home</Button>
      </Link>
    </NotFoundPageWrapper>
  </Layout>
)

const NotFoundPageWrapper = styled.div`
  padding: 0 1.5rem;
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Oswald";
    font-size: 7rem;
    /* line-height: 1.25; */
  }
  h2 {
    font-family: "Roboto";
    color: ${styles.colors.grey};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 1rem;
  }
  p {
    font-family: "Noto Sans";
    padding: 1rem 0;
  }
  button {
    color: ${styles.colors.white};
    background: ${styles.colors.primary};
    &:hover {
      background: ${styles.colors.primaryDark};
    }
  }
  a {
    text-decoration: none;
  }
`

export default NotFoundPage
