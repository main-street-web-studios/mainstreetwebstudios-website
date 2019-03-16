import React from "react"
import styled from "styled-components"

import MeetOurTeam from "./MeetOurTeam"
import OurMission from "./OurMission"

export default () => {
  return (
    <About>
      <MeetOurTeam />
      <OurMission />
      <ImgBanner>
        <div />
      </ImgBanner>
    </About>
  )
}

const About = styled.div``

const ImgBanner = styled.div`
  background-image: url("https://images.unsplash.com/photo-1529466154926-1e7659db6eb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-position: center;
  height: 12rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
