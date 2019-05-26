import React from "react"
import { withStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

const BottomAppBar = props => {
  const { classes } = props

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.toggleDrawer(true)}
        >
          <Icon>menu</Icon>
        </IconButton>
        {props.camera}
        <div>
          <IconButton color="inherit">
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  }
})

export default withStyles(styles)(BottomAppBar)
