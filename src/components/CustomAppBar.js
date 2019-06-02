import React, { useContext } from "react"
import { withStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import Avatar from "@material-ui/core/Avatar"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { AuthContext } from "../AuthContext"
import firebase from "../firebase/firebase"

const CustomAppBar = props => {
  const { classes } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const context = useContext(AuthContext)

  function handleMenu(event) {
    context.authenticated && setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
    firebase.auth().signOut()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Pai
          </Typography>
          <IconButton color="inherit" onClick={handleMenu}>
            {context.authenticated ? (
              <Avatar
                alt="Remy Sharp"
                src={context.user.photoURL}
                className={classes.avatar}
              />
            ) : (
              <Icon>account_circle</Icon>
            )}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  root: {},
  grow: {
    flexGrow: 1
  },
  avatar: {
    margin: 0,
    padding: 0,
    height: "24px",
    width: "24px"
  }
}

export default withStyles(styles)(CustomAppBar)
