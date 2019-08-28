import React from "react"
import { withStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import Avatar from "@material-ui/core/Avatar"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { useSelector } from "react-redux"
import firebase from "../firebase/firebase"
import { useDispatch } from "react-redux"
import { logout } from "../redux/actions"

const CustomAppBar = props => {
  const { classes } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  function handleMenu(event) {
    user.authenticated && setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  function handleSignOut() {
    setAnchorEl(null)
    firebase.auth().signOut()
    dispatch(logout())
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Pai
          </Typography>
          <IconButton color="inherit" onClick={handleMenu}>
            {user.authenticated ? (
              <Avatar
                alt="Remy Sharp"
                src={user.data.photoURL}
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
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
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
