import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { Button } from "@material-ui/core"

export default () => {
  const OurMission = styled.section`
    font-family: "Noto Sans";
    margin-bottom: 0;
    padding: 1.5rem;
    padding-bottom: 2.5rem;
    margin: 0 auto;
    max-width: 65rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-family: "Oswald";
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 0;
      padding-top: 0;
    }
    p {
      margin-bottom: 1rem;
    }
    #cta {
      color: ${styles.colors.white};
      background: ${styles.colors.primary};
      font-family: "Noto Sans";
      font-weight: 700;
      font-size: 0.9rem;
      padding: 0.75rem 0;
      margin: 0 auto;
      margin-top: 0.75rem;
      width: 100%;
      &:hover {
        background: ${styles.colors.primaryDark};
      }
    }
    @media (min-width: 768px) {
      #cta {
        width: 14rem;
      }
    }
  `

  return (
    <OurMission>
      <h2>Our Mission</h2>
      <p>
        Small business is important to us. We both grew up in a small town and
        saw many of our favorite local businesses fail due to a weak online
        presence.
      </p>
      <p>
        It's our goal to allow every family-owned business to compete with the
        big corporations through the power of the internet.
      </p>
      <Button id="cta" variant="contained">
        Get Started
      </Button>
    </OurMission>
  )
}
