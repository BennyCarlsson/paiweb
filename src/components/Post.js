import React from "react"
import FeedImage from "./FeedImage"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"

const Post = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt="Post Avatar"
        src={props.post.userPhotoURL}
      />
      <FeedImage imageRef={props.post.imgRef} />
    </div>
  )
}
const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px",
    marginBottom: "8px"
  },
  avatar: {
    border: "2px solid #fafafa",
    marginBottom: "-21px",
    marginLeft: "6px"
  }
}))

export default Post
