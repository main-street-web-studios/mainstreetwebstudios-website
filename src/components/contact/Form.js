import React from "react"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3a7" },
  },
})

export default () => {
  const Form = styled.section`
    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #send-email-btn {
      background: #3a7;
      color: white;
      margin: 1rem 0;
      padding: 0.75rem 0;
      font-family: "Noto Sans";
      font-weight: 700;
      &:hover {
        background: #296;
      }
    }
    .text-field {
      background: white;
      border-radius: 0.25rem;
      input,
      textarea {
        text-align: left;
        font-family: "Noto Sans";
      }
    }
  `

  return (
    <Form className="Contact">
      <MuiThemeProvider theme={theme}>
        <form>
          <TextField
            id="name-input"
            required
            label="Name"
            className="text-field"
            defaultValue=""
            onChange={() => {}}
            margin="normal"
            variant="outlined"
            autoComplete="false"
          />

          <TextField
            id="email-input"
            required
            label="Email"
            className="text-field"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="phone-input"
            label="Phone (optional)"
            className="text-field"
            defaultValue=""
            onChange={() => {}}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-multiline-static"
            required
            label="Message"
            multiline
            rows="4"
            defaultValue=""
            className="text-field"
            margin="normal"
            variant="outlined"
          />

          <Button id="send-email-btn" variant="contained">
            Send Email
          </Button>
        </form>
      </MuiThemeProvider>
    </Form>
  )
}
