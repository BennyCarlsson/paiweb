import React, { useEffect, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getAllPosts } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"

const Feed = props => {
  const [allPosts, setAllPosts] = useState([])
  const classes = useStyles()
  const getAllFeedImages = () => {
    getAllPosts().then(posts => setAllPosts(posts))
  }

  useEffect(() => getAllFeedImages(), [])

  const renderPost = () => {
    return allPosts.map((post, i) => <Post key={"post" + i} post={post} />)
  }
  return (
    <div className={classes.feedWrapper}>
      {props.imagePreviewUrl && (
        <ExifOrientationImg
          styles={"image-orientation: from-image"}
          width="100%"
          height="auto"
          src={props.imagePreviewUrl}
          alt="preview"
        />
      )}
      {renderPost()}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  feedWrapper: { marginBottom: "250px", marginTop: "10px" }
}))

export default Feed
