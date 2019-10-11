import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import List from "@material-ui/core/List"
import { sendPushNotification } from "../firebase/dbFunctions"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import { convertTimeStamp } from "../utils"

const DisplayGroupMembers = props => {
  const {
    currentGroup: { members: users },
    allPosts
  } = useSelector(state => state.feed)
  const classes = useStyles()

  const onPress = toUid => {
    sendPushNotification(toUid).then(val => {
      const text = val.data
        ? "Sent Notification!"
        : "Couldn't send notification"
      props.setShowSnackBar(true, text)
    })
  }

  const renderUsers = () => {
    if (!users) {
      return <p>...</p>
    }

    return users.map((u, i) => userItem(u, i))
  }

  const userItem = (u, i) => {
    return (
      <ListItem key={i + "1"} button onClick={() => onPress(u.uid)}>
        <ListItemAvatar>
          <Avatar alt={"Avatar photo"} src={u.photoURL} />
        </ListItemAvatar>
        <ListItemText
          primary={u.displayName}
          secondary={getLastPostDate(u.uid, allPosts)}
        />
      </ListItem>
    )
  }

  return (
    <List dense className={classes.list}>
      {renderUsers()}
    </List>
  )
}

const getLastPostDate = (uid, allPosts) => {
  if (!uid || !allPosts) return
  const latestPost = allPosts
    .filter(post => post.uid === uid)
    .sort(
      (a, b) => a.timestamp.toDate().getTime() - b.timestamp.toDate().getTime()
    )
  return latestPost[0]
    ? convertTimeStamp(latestPost[latestPost.length - 1].timestamp.toDate())
    : "😴"
}

const useStyles = makeStyles(theme => ({
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.main
  }
}))

export default DisplayGroupMembers
