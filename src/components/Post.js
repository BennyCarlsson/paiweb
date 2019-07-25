import React from "react"
import FeedImage from "./FeedImage"
import PostTimer from "./PostTimer"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"

const Post = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.postWrapper}>
        <div className={classes.avatarTimeDiv}>
          <Avatar
            className={classes.avatar}
            alt="Post Avatar"
            src={props.post.userPhotoURL}
          />
          <PostTimer timestamp={props.post.timestamp} />
        </div>
        <FeedImage
          imageRef={props.post.imgRef}
          renderNextImages={props.renderNextImages}
          renderImages={props.renderImages}
          index={props.index}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    scrollSnapAlign: "start",
    padding: "0px",
    height: "82vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  postWrapper: {
    width: "100%",
    maxWidth: "450px"
  },
  avatar: {
    border: "2px solid #fafafa",
    marginLeft: "6px"
  },
  avatarTimeDiv: {
    display: "flex",
    marginBottom: "-21px"
  }
}))

export default Post
