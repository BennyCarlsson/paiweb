import React, { useEffect, useContext, useState } from "react"
import { AuthContext } from "../AuthContext"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar"
import { getUserGroups } from "../firebase/dbFunctions"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const ListGroups = () => {
  const [groups, setGroups] = useState([])
  const context = useContext(AuthContext)
  const classes = useStyle()

  useEffect(() => {
    if (context.authenticated && context.user) {
      getUserGroups(context.user.uid).then(groups => {
        setGroups(groups)
      })
    }
  }, [context.authenticated, context.user])

  const renderGroups = () => {
    return groups ? (
      groups.map((group, i) => groupItem(group, i))
    ) : (
      <Typography
        variant="body2"
        color="inherit"
        className={classes.loadingText}
      >
        loading groups..
      </Typography>
    )
  }

  const groupItem = (group, i) => {
    return (
      <ListItem key={"key" + i} button onClick={() => onPress(group.id)}>
        {renderMembersAvatar(group)}
      </ListItem>
    )
  }

  const renderMembersAvatar = group => {
    return group.members.map((user, i) => (
      <Avatar
        key={"key" + i}
        alt={"Avatar photo"}
        src={user.photoURL}
        className={classes.avatar}
      />
    ))
  }

  const onPress = groupId => {
    const link = window.location.href + "?groupId=" + groupId
    navigator.clipboard.writeText(link).then(
      function() {
        //console.log("Async: Copying to clipboard was successful!", link)
      },
      function(err) {
        console.error("Async: Could not copy text: ", err)
      }
    )
  }

  return <List>{renderGroups()}</List>
}

const useStyle = makeStyles(theme => ({
  loadingText: {
    marginLeft: "16px"
  },
  avatar: {
    marginLeft: "-6px",
    border: "2px solid white"
  }
}))

export default ListGroups
