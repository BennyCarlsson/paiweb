import React from "react"
import "./App.css"
import CustomAppBar from "./components/CustomAppBar"
import CustomBottomAppBar from "./components/CustomBottomAppBar"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Camera from "./components/Camera"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ec407a", light: "#ff77a9", dark: "#b4004e" },
    secondary: { main: "#42a5f5", light: "#80d6ff", dark: "#0077c2" }
  },
  typography: { useNextVariants: true }
})

function App(props) {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CustomAppBar />
        <Camera />
        <CustomBottomAppBar />
      </MuiThemeProvider>
    </div>
  )
}

export default App
