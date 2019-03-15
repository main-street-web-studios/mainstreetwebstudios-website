import React from "react"
import styled from "styled-components"
import { Avatar } from "@material-ui/core"

export default () => {
  const MeetOurTeam = styled.section`
    font-family: "Noto Sans";
    margin-bottom: 0;
    padding: 0 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    margin: 0 auto;
    max-width: 65rem;
    h2 {
      font-family: "Oswald";
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 0;
      padding-top: 0;
    }
    h3 {
      text-align: left;
      font-weight: 700;
    }
    h4 {
      text-align: left;
      font-family: Roboto;
      margin-bottom: 0.4rem;
      color: #3a7;
      font-weight: 700;
      font-family: "Noto Sans";
    }
    p {
      text-align: left;
    }
    .team-member {
      display: flex;
      align-items: center;
      padding-bottom: 1.5rem;
      margin-bottom: 1rem;
    }
    .team-member-avatar {
      > * {
        max-width: 10rem;
        min-width: 8rem;
        width: 30vw;
        max-height: 10rem;
        min-height: 8rem;
        height: 30vw;
        margin-right: 1rem;
      }
    }
  `

  return (
    <MeetOurTeam>
      <h2>Meet Our Team</h2>
      <div className="team-member">
        <div className="team-member-avatar">
          <Avatar src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/49555784_1404509823013191_3202670500316708864_n.jpg?_nc_cat=105&_nc_ht=scontent-mia3-1.xx&oh=6130a04ec965514f491dc40dbce79163&oe=5D0C0177" />
        </div>
        <div>
          <h3>Zach Coursey</h3>
          <h4>WEB DEVELOPER</h4>
          <p>
            Zach lends his software engineering expertise, creating websites
            that look great and function even better.
          </p>
        </div>
      </div>
      <div className="team-member">
        <div className="team-member-avatar">
          <Avatar src="https://images.unsplash.com/photo-1527887980323-88b77f646535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
        </div>
        <div>
          <h3>Kent Carson</h3>
          <h4>UI/UX DESIGNER</h4>
          <p>
            Kent focuses on design and uses his knowledge of SEO to help all of
            our clients' sites get to the top.
          </p>
        </div>
      </div>
    </MeetOurTeam>
  )
}
