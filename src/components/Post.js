import React, { useState } from "react"
import PostImage from "./PostImage"
import PostTimer from "./PostTimer"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import DrawIcon from "./DrawIcon"

const Post = props => {
  const classes = useStyles()
  const [drawEnabled, setDrawEnabled] = useState(true)
  const { post, renderNextImages, renderImages, index } = props

  const editDrawEnabled = () => {
    setDrawEnabled(!drawEnabled)
  }

  return (
    <div className={classes.root}>
      <div className={classes.postWrapper}>
        <div className={classes.avatarTimeDiv}>
          <Avatar
            className={classes.avatar}
            alt="Post Avatar"
            src={post.userPhotoURL}
          />
          <PostTimer timestamp={post.timestamp} />
        </div>
        <PostImage
          drawEnabled={drawEnabled}
          imageRef={post.imgRef}
          renderNextImages={renderNextImages}
          renderImages={renderImages}
          index={index}
          canvasDrawings={post.canvasDrawings}
          postId={post.postId}
        />
        <DrawIcon editDrawEnabled={editDrawEnabled} drawEnabled={drawEnabled} />
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
    position: "relative",
    width: "100%",
    maxWidth: "450px"
  },
  avatar: {
    border: "2px solid #fafafa",
    marginLeft: "6px"
  },
  avatarTimeDiv: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    marginBottom: "-21px"
  }
}))

export default Post
