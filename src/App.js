import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import PageLayout from "./components/PageLayout"

const theme = createMuiTheme({
  palette: {
    background: { main: "#fafafa" },
    primary: { main: "#ec407a", light: "#ff77a9", dark: "#b4004e" },
    secondary: { main: "#42a5f5", light: "#80d6ff", dark: "#0077c2" },
    green: { main: "#43a047", light: "#d7ffd9", dark: "#76d275" },
    gray: { main: "#d9d9d9", light: "#80808026", dark: "gray" }
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
