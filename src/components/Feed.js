import React, { useEffect, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getAllPosts } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"
import Icon from "@material-ui/core/Icon"
import NoAccessToFeed from "./NoAccessToFeed"

const Feed = props => {
  const [allPosts, setAllPosts] = useState([])
  const [showFeed, setShowFeed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const classes = useStyles()

  const getAllFeedImages = () => {
    if (props.latestValidPost) {
      setShowFeed(true)
      getAllPosts().then(posts => setAllPosts(posts))
    } else {
      setShowFeed(false)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getAllFeedImages()
  }, [props.latestValidPost])

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
      <NoAccessToFeed />
      <div className={classes.feedEndDiv}>
        <Icon fontSize="small">panorama_fish_eye</Icon>
      </div>
    </div>
  )
}
// {isLoading ? (
//   <p>loading</p>
// ) : showFeed ? (
//   renderPost()
// ) : (
//   <NoAccessToFeed />
// )}
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
    color: theme.palette.gray.main
  }
}))

export default Feed
