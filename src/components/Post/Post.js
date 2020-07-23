import React, { useState } from "react"
import PostImage from "./PostImage"
import PostTimer from "./PostTimer"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import DrawIcon from "./DrawIcon"
import { progressCalc, convertTimeStamp } from "../../utils"

const Post = (props) => {
  const classes = useStyles()
  const [drawEnabled, setDrawEnabled] = useState(false)
  const { post } = props

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
          <PostTimer
            progressValue={progressCalc(post.timestamp.toDate())}
            timestamp={convertTimeStamp(post.timestamp.toDate())}
          />
        </div>
        <PostImage
          drawEnabled={drawEnabled}
          imageRef={post.imgRef}
          canvasDrawings={post.canvasDrawings}
          postId={post.postId}
        />
        <DrawIcon editDrawEnabled={editDrawEnabled} drawEnabled={drawEnabled} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    scrollSnapAlign: "start",
    padding: "0px",
    paddingBottom: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  postWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "450px",
  },
  avatar: {
    border: "2px solid #fafafa",
    marginRight: "8px",
  },
  avatarTimeDiv: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    padding: "8px",
    alignItems: "center",
  },
}))

export default Post
