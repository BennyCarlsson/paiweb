import React from "react"
import FeedImage from "./FeedImage"
import PostText from "./PostText"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"

const Post = props => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <FeedImage imageRef={props.post.imgRef} />
      <PostText text={"textytext asd askdjaskd"} />
    </Paper>
  )
}
const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px",
    marginBottom: "8px"
  }
}))

export default Post
