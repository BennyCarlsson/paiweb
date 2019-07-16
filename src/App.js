import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import PageLayout from "./components/PageLayout"

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

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PageLayout />
    </MuiThemeProvider>
  )
}

export default App
