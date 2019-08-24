import React, { Component } from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import PageLayout from "./components/PageLayout"
import * as serviceWorker from "./serviceWorker"
import UpdateSnackbar from "./components/UpdateSnackbar"
import { initializePush } from "./pushNotifications"
import firebase from "firebase"

const messaging = firebase.messaging()

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: { main: "#000000" },
    primary: { main: "#000000" },
    secondary: { main: "#ffffff" },
    color: { main: "#FF2188" },
    gray: { main: "#666666" }
  },
  typography: { useNextVariants: true }
})

//todo make into a funcion with hooks

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showUpdateSnackBar: false,
      FCMToken: ""
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./fbsw/firebase-messaging-sw.js")
        .then(registration => {
          messaging.useServiceWorker(registration)
          initializePush(messaging)
            .then(token => {
              this.setState({ FCMToken: token })
            })
            .catch(error => {
              if (error.code === "messaging/permission-blocked") {
                console.log("Please Unblock Notification Request Manually")
              } else {
                console.log("Error Occurred", error)
              }
            })
        })
        .catch(function(err) {
          console.log("Service worker registration failed, error:", err)
        })
    }

    serviceWorker.register({
      onUpdate: this.handleServiceWorkerUpdate
    })
  }

  handleServiceWorkerUpdate = registration => {
    this.setState({ showUpdateSnackBar: true })
  }

  handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    this.setState({ showUpdateSnackBar: false })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PageLayout FCMToken={this.state.FCMToken} />
        <UpdateSnackbar
          handleCloseSnackBar={this.handleCloseSnackBar}
          showUpdateSnackBar={this.state.showUpdateSnackBar}
        />
      </MuiThemeProvider>
    )
  }
}

export default App
