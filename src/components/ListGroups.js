import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeGroup } from "../redux/actions"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const ListGroups = () => {
  const classes = useStyle()
  const groups = useSelector(state => state.groups)
  const dispatch = useDispatch()

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
      <ListItem key={"key" + i} button onClick={() => onPress(group)}>
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

  //Todo share button
  const onPress = group => {
    dispatch(changeGroup(group))
    const link = window.location.href + "?groupId=" + group.id
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
