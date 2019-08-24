import React, { useEffect, useState, useContext, Fragment } from "react"
import { makeStyles } from "@material-ui/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { getAllUsers, sendPushNotification } from "../firebase/dbFunctions"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import { AuthContext } from "../AuthContext"
import { convertTimeStamp } from "../utils"
import Typography from "@material-ui/core/Typography"
import SentPushNotificationSnackBar from "./SentPushNotificationSnackbar"
import CreateGroupButton from "./CreateGroupButton"
import ListGroups from "./ListGroups"

const CustomSideDrawer = props => {
  const { open, toggleDrawer } = props
  const classes = useStyles()
  const [users, setUsers] = useState()
  const [showSnackBar, setShowSnackBar] = useState(false)
  const context = useContext(AuthContext)

  useEffect(() => {
    if (context.authenticated) {
      getAllUsers().then(users => setUsers(users))
    } else {
      setUsers([])
    }
  }, [context.authenticated])

  const onPress = FCMToken => {
    setShowSnackBar(true)
    sendPushNotification(FCMToken)
  }
  const handleCloseSnackBar = () => {
    setShowSnackBar(false)
  }

  const renderUsers = () => {
    if (!users) {
      return <p>...</p>
    }

    return users.map((u, i) => user(u, i))
  }

  const user = (u, i) => {
    return (
      <ListItem key={i + "1"} button onClick={() => onPress(u.FCMToken)}>
        <ListItemAvatar>
          <Avatar alt={"Avatar photo"} src={u.photoURL} />
        </ListItemAvatar>
        <ListItemText
          primary={u.displayName}
          secondary={
            u.lastUpdate
              ? "posted " + convertTimeStamp(u.lastUpdate.toDate()) + " ago"
              : ""
          }
        />
      </ListItem>
    )
  }

  return (
    <Fragment>
      <SentPushNotificationSnackBar
        handleCloseSnackBar={handleCloseSnackBar}
        showSnackBar={showSnackBar}
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
          <List dense className={classes.list}>
            {renderUsers()}
          </List>
          <ListGroups />
          <CreateGroupButton />
          <Typography variant="body2" gutterBottom>
            Beta v.0.1.4
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
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.main
  }
}))

export default CustomSideDrawer
