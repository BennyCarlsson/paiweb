import React from "react"
import FeedImage from "./FeedImage"
import PostText from "./PostText"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"

import Avatar from "@material-ui/core/Avatar"

const Post = props => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <FeedImage imageRef={props.post.imgRef} />
      <Avatar
        className={classes.avatar}
        alt="Post Avatar"
        src={props.post.userPhotoURL}
      />
      <PostText text={"textytext asd askdjaskd"} />
    </Paper>
  )
}
const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px",
    marginBottom: "8px"
  },
  avatar: {
    border: "3px solid #fafafa",
    marginTop: "-21px",
    marginLeft: "6px"
  }
}))

export default Post
