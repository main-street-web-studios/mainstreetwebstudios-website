import React from "react"
import styled from "styled-components"
import { Avatar, Paper } from "@material-ui/core"

export default () => {
  const MeetOurTeam = styled.section`
    font-family: "Noto Sans";
    padding-bottom: 1rem;
    background: #f5f5f5;
    #team-container {
      padding: 1.5rem;
      max-width: 65rem;
      margin: 0 auto;
    }
    h2 {
      font-family: "Oswald";
      font-size: 2rem;
      font-weight: 700;
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 1.5rem;
    }
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
    }
    h4 {
      font-family: Roboto;
      color: #3a7;
      font-weight: 700;
      font-family: "Noto Sans";
    }
    .team-members-container {
      display: block;
    }
    .team-member {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .team-member:nth-of-type(2) {
      margin-bottom: 0;
    }
    .team-member-avatar {
      padding: 0.5rem;
      border-radius: 50%;
      margin-bottom: 0.5rem;
      > * {
        max-width: 22rem;
        min-width: 15rem;
        width: 50vw;
        max-height: 22rem;
        min-height: 15rem;
        height: 50vw;
      }
    }
    @media (min-width: 768px) {
      .team-members-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      .team-member-avatar {
        > * {
          max-width: 22rem;
          min-width: 15rem;
          width: 40vw;
          max-height: 22rem;
          min-height: 15rem;
          height: 40vw;
        }
      }
    }
  `

  return (
    <MeetOurTeam>
      <div id="team-container">
        <h2>Meet Our Team</h2>
        <p>
          We founded Main Street to bring together our love of small business
          and technology. Whether its design, marketing, or development, our
          team works for you.
        </p>
        <div className="team-members-container">
          <div className="team-member">
            <Paper className="team-member-avatar">
              <Avatar src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/49555784_1404509823013191_3202670500316708864_n.jpg?_nc_cat=105&_nc_ht=scontent-mia3-1.xx&oh=6130a04ec965514f491dc40dbce79163&oe=5D0C0177" />
            </Paper>
            <h3>Zach Coursey</h3>
            <h4>WEB DEVELOPER</h4>
          </div>
          <div className="team-member">
            <Paper className="team-member-avatar">
              <Avatar src="https://images.unsplash.com/photo-1527887980323-88b77f646535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            </Paper>
            <h3>Kent Carson</h3>
            <h4>UI/UX DESIGNER</h4>
          </div>
        </div>
      </div>
    </MeetOurTeam>
  )
}
