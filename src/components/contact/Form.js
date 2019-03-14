import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import { styles } from "../../utils"
import * as emailValidator from "email-validator"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3a7" },
  },
})

export default class Form extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
  }

  validateField = (field, isSubmit) => {
    const { name, email, message } = this.state
    if (!isSubmit && this.state[field] === "") return
    switch (field) {
      case "name":
        if (name !== "") {
          this.setState({ nameError: "" })
          return true
        } else {
          this.setState({ nameError: "Enter your name" })
          return false
        }
      case "email":
        if (email !== "") {
          if (!emailValidator.validate(email)) {
            this.setState({ emailError: "Enter a valid email address" })
            return false
          }
          this.setState({ emailError: "" })
          return true
        } else {
          this.setState({ emailError: "Enter your email address" })
          return false
        }
      case "phone":
        return true
      case "message":
        if (message !== "") {
          this.setState({ messageError: "" })
          return true
        } else {
          this.setState({ messageError: "Enter a message" })
          return false
        }
      default:
        break
    }
  }

  validate = () => {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      messageError,
    } = this.state
    let isValid
    this.validateField("name", true)
    this.validateField("email", true)
    this.validateField("message", true)
    isValid =
      this.validateField("name", true) &&
      this.validateField("email", true) &&
      this.validateField("message", true)
    if (isValid) {
      navigate("/email-sent/")
    }
  }

  handleChange = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    this.setState(
      {
        [name]: value,
      },
      () => this.validateField(name, false)
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.validate()
  }

  render() {
    const { nameError, emailError, messageError } = this.state

    return (
      <StyledForm>
        <MuiThemeProvider theme={theme}>
          <form noValidate>
            <div className="field-container">
              <label>{nameError}</label>
              <input
                name="name"
                placeholder="Name"
                className="text-field"
                onBlur={this.handleChange}
                onFocus={() => this.setState({ nameError: "" })}
                style={{
                  borderColor: nameError
                    ? styles.colors.secondary
                    : styles.colors.grey,
                }}
              />
            </div>

            <div className="field-container">
              <label>{emailError}</label>
              <input
                name="email"
                placeholder="Email"
                className="text-field"
                onBlur={this.handleChange}
                onFocus={() => this.setState({ emailError: "" })}
                style={{
                  borderColor: emailError
                    ? styles.colors.secondary
                    : styles.colors.grey,
                }}
              />
            </div>

            <div className="field-container">
              <input
                name="phone"
                placeholder="Phone (optional)"
                className="text-field"
                onBlur={this.handleChange}
              />
            </div>

            <div className="field-container">
              <label>{messageError}</label>
              <textarea
                name="message"
                placeholder="Message"
                className="text-field"
                onBlur={this.handleChange}
                onFocus={() => this.setState({ messageError: "" })}
                style={{
                  borderColor: messageError
                    ? styles.colors.secondary
                    : styles.colors.grey,
                }}
              />
            </div>

            <Button
              id="send-email-btn"
              variant="contained"
              type="submit"
              onClick={this.handleSubmit}
            >
              Send Email
            </Button>
          </form>
        </MuiThemeProvider>
      </StyledForm>
    )
  }
}

const StyledForm = styled.section`
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #send-email-btn {
    width: 100%;
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
  .field-container {
    margin-top: 0.5rem;
    padding-top: 1.25rem;
    width: 100%;
    position: relative;
    > label {
      position: absolute;
      top: 0;
      color: ${styles.colors.secondary};
      font-family: "Noto Sans";
      font-size: 0.9rem;
    }
  }
  .text-field {
    transition: ${styles.transitions.standard};
    width: 100%;
    background: white;
    border: 0.05rem solid ${styles.colors.grey};
    border-radius: 0.25rem;
    text-align: left;
    font-family: "Noto Sans";
    outline: none;
    padding: 1rem;
    font-size: 1rem;
    &:focus {
      border-color: ${styles.colors.primary} !important;
    }
  }
  textarea {
    resize: none;
    height: 7rem;
    margin-bottom: 0.25rem;
  }
  @media (min-width: 768px) {
    #send-email-btn {
      width: 13rem;
    }
  }
`
