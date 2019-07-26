import React, { useEffect, useState } from "react"
import { getAllPosts } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import NoAccessToFeed from "./NoAccessToFeed"

const Feed = props => {
  const [allPosts, setAllPosts] = useState([])
  const [showFeed, setShowFeed] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [renderImages, setRenderImages] = useState(2)
  const classes = useStyles()

  const renderNextImages = i => {
    setRenderImages(i + 2)
  }

  useEffect(() => {
    const getAllFeedImages = () => {
      if (props.gotLatestPost) {
        if (props.latestValidPost) {
          setShowFeed(true)
          getAllPosts().then(posts => setAllPosts(posts))
        } else {
          setShowFeed(false)
        }
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    }
    getAllFeedImages()
  }, [props.latestValidPost, props.gotLatestPost])

  const renderPost = () => {
    return allPosts.map((post, i) => (
      <Post
        key={"post" + i}
        renderNextImages={renderNextImages}
        renderImages={renderImages}
        index={i}
        post={post}
      />
    ))
  }
  return (
    <div className={classes.feedWrapper}>
      <div className={classes.feedTopDiv} />

      {isLoading ? (
        <Typography variant="subtitle1">loading</Typography>
      ) : showFeed ? (
        [
          renderPost(),
          <div key="alasd213" className={classes.feedEndDiv}>
            <Icon fontSize="small">panorama_fish_eye</Icon>
          </div>
        ]
      ) : (
        <NoAccessToFeed />
      )}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  feedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.main
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
