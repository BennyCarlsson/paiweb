import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

function CustomAppBar(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Pai
          </Typography>
          <IconButton color="inherit">
            <Icon>account_circle</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  }
}

export default withStyles(styles)(CustomAppBar)
