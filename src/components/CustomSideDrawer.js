import React, { useState, Fragment } from "react"
import { makeStyles } from "@material-ui/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import SentPushNotificationSnackBar from "./SentPushNotificationSnackbar"
import CreateGroupButton from "./CreateGroupButton"
import ListGroups from "./ListGroups"

const CustomSideDrawer = props => {
  const { open, toggleDrawer } = props
  const classes = useStyles()
  const [showSnackBar, setShowSnackBar] = useState(false)
  const [snackBarText, setSnackBarText] = useState("Push Notification")

  const handleCloseSnackBar = () => {
    setShowSnackBar(false)
  }

  const _setShowSnackBar = (bool, text) => {
    setShowSnackBar(bool)
    setSnackBarText(text)
  }

  return (
    <Fragment>
      <SentPushNotificationSnackBar
        handleCloseSnackBar={handleCloseSnackBar}
        showSnackBar={showSnackBar}
        snackBarText={snackBarText}
      />
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={classes.drawerList}
        >
          <ListGroups setShowSnackBar={_setShowSnackBar} />
          <CreateGroupButton />
          <Typography variant="body2" gutterBottom>
            Beta v.0.1.8
          </Typography>
        </div>
      </SwipeableDrawer>
    </Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  drawerList: {
    height: "100%",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.main
  }
}))

export default CustomSideDrawer
