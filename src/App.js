import React, { Component } from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import PageLayout from "./components/PageLayout"
import * as serviceWorker from "./serviceWorker"
import UpdateSnackbar from "./components/UpdateSnackbar"

const theme = createMuiTheme({
  palette: {
    background: { main: "#000000" },
    primary: { main: "#000000" },
    secondary: { main: "#ffffff" },
    color: { main: "#FF2188" },
    gray: { main: "#666666" }
  },
  typography: { useNextVariants: true }
})

class App extends Component {
  constructor(props) {
    super(props)
    serviceWorker.register({
      onUpdate: this.handleServiceWorkerUpdate
    })
    this.state = {
      showUpdateSnackBar: false
    }
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
        <PageLayout />
        <UpdateSnackbar
          handleCloseSnackBar={this.handleCloseSnackBar}
          showUpdateSnackBar={this.state.showUpdateSnackBar}
        />
      </MuiThemeProvider>
    )
  }
}

export default App
