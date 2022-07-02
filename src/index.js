import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import App from "./components/App"

ReactDOM.render(
  <Container>
    <App />
  </Container>,

  document.getElementById("root")
)
