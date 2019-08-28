import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeGroup } from "../redux/actions"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"

const ListGroups = () => {
  const classes = useStyle()
  const groups = useSelector(state => state.groups)
  const user = useSelector(state => state.user)
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
      <div key={"key" + i} className={classes.groupButtonWrapper}>
        <ListItem button onClick={() => onPress(group)}>
          {renderMembersAvatar(group)}
        </ListItem>
        {user.data.uid === "CtJDRqu7FUf6OReDg8ztcTo1wmv2" ? (
          <IconButton onClick={() => onInvitePress(group.id)}>
            <Icon>group_add</Icon>
          </IconButton>
        ) : (
          ""
        )}
      </div>
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

  const onInvitePress = groupId => {
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

  //Todo share button
  const onPress = group => {
    dispatch(changeGroup(group))
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
  },
  groupButtonWrapper: {
    display: "flex",
    alignItems: "center"
  }
}))

export default ListGroups
