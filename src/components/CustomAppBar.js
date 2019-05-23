import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

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

function CustomAppBar(props) {
  const { classes } = props
  const [state, setState] = React.useState({
    left: false
  })
  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <div className={classes.list}>SideDrawer</div>
          </div>
        </SwipeableDrawer>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer("left", true)}
          >
            <Icon>menu</Icon>
          </IconButton>
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

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CustomAppBar)
