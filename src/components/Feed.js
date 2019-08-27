import React, { useEffect, useState } from "react"
import { getAllPosts } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import NoAccessToFeed from "./NoAccessToFeed"
import { useSelector, useDispatch } from "react-redux"
import { setAllPosts } from "../redux/actions"

const Feed = props => {
  const [showFeed, setShowFeed] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [renderImages, setRenderImages] = useState(2)
  const classes = useStyles()
  const user = useSelector(state => state.user)
  const feed = useSelector(state => state.feed)
  const dispatch = useDispatch()

  const renderNextImages = i => {
    setRenderImages(i + 2)
  }

  useEffect(() => {
    if (props.gotLatestPost) {
      if (props.latestValidPost) {
        setShowFeed(true)
        getAllPosts(user.data.uid).then(posts => {
          dispatch(setAllPosts(posts))
        })
      } else {
        setShowFeed(false)
      }
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [props.latestValidPost, props.gotLatestPost, user, dispatch])

  //Todo this is a quickfix remove updatefeed from pagelayout
  // replace this with redux or something
  useEffect(() => {
    //ugly quickfix since it's 0 first time it won't update
    if (props.updateFeed) {
      getAllPosts(user.data.uid).then(posts => dispatch(setAllPosts(posts)))
      setShowFeed(true)
    }
  }, [props.updateFeed, user, dispatch])

  const renderPost = () => {
    const posts =
      feed.currentGroup && feed.allPosts
        ? feed.allPosts.filter(post =>
            post.groupIds.includes(feed.currentGroup.id)
          )
        : []
    return posts.map((post, i) => (
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
        renderPost()
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
  }
}))

export default Feed
