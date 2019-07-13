import React, { useEffect, useState, useContext } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getAllPosts, havePosted } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"
import Icon from "@material-ui/core/Icon"
import { AuthContext } from "../AuthContext"
import NoAccessToFeed from "./NoAccessToFeed"

const Feed = props => {
  const [allPosts, setAllPosts] = useState([])
  const [showFeed, setShowFeed] = useState(false)
  const classes = useStyles()
  const context = useContext(AuthContext)

  const getAllFeedImages = () => {
    havePosted(context.user.uid).then(posted => {
      if (posted) {
        setShowFeed(true)
        getAllPosts().then(posts => setAllPosts(posts))
      } else {
        setShowFeed(false)
      }
    })
  }

  useEffect(() => getAllFeedImages(), [])

  const renderPost = () => {
    return allPosts.map((post, i) => <Post key={"post" + i} post={post} />)
  }
  return (
    <div className={classes.feedWrapper}>
      <div className={classes.feedTopDiv} />
      {props.imagePreviewUrl && (
        <ExifOrientationImg
          styles={"image-orientation: from-image"}
          width="100%"
          height="auto"
          src={props.imagePreviewUrl}
          alt="preview"
        />
      )}
      {showFeed ? renderPost() : <NoAccessToFeed />}
      <div className={classes.feedEndDiv}>
        <Icon fontSize="small">panorama_fish_eye</Icon>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  feedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  feedTopDiv: {
    scrollSnapAlign: "end"
  },
  feedEndDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh",
    color: "#d9d9d9"
  }
}))

export default Feed
