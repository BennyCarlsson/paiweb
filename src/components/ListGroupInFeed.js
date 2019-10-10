import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/styles"

const ListGroupInFeed = props => {
  const { group } = props
  const classes = useStyle()
  return (
    <div className={classes.groupWrapper}>
      <div className={classes.leftAvatarsLine} />
      <div className={classes.listItemWrapper}>
        <ListItem>{RenderMembersAvatar(group)}</ListItem>
      </div>
      <div className={classes.rightAvatarsLine} />
    </div>
  )
}

const RenderMembersAvatar = group => {
  const classes = useStyle()
  return group.members.map((user, i) => (
    <Avatar
      key={"key" + i}
      alt={"Avatar photo"}
      src={user.photoURL}
      className={classes.avatar}
    />
  ))
}

const useStyle = makeStyles(theme => ({
  groupWrapper: {
    display: "flex",
    width: "100%"
  },
  avatar: {
    marginLeft: "-6px",
    border: "2px solid white"
  },
  listItemWrapper: {
    display: "flex"
  },
  leftAvatarsLine: {
    width: "100%",
    borderTop: "1px solid white",
    marginLeft: "8px",
    marginTop: "35px",
    height: "16px"
  },
  rightAvatarsLine: {
    width: "100%",
    borderTop: "1px solid white",
    marginRight: "8px",
    marginTop: "35px",
    height: "16px"
  }
}))

export default ListGroupInFeed
