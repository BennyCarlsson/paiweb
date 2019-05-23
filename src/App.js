import React from "react"
import "./App.css"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import Fab from "@material-ui/core/Fab"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
})

function App(props) {
  const { classes } = props
  return (
    <div className="App">
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer">
            <Icon>menu</Icon>
          </IconButton>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <Icon>photo_camera</Icon>
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(App)
