import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/core/Icon"

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

function BottomAppBar(props) {
  const { classes } = props
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" aria-label="Open drawer">
          <Icon>menu</Icon>
        </IconButton>
        <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
          <Icon>photo_camera</Icon>
        </Fab>
        <div>
          <IconButton color="inherit">
            <Icon>more</Icon>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(BottomAppBar)
