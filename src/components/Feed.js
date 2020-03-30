import React, { useEffect, useState, Fragment } from "react"
import { getAllPosts } from "../firebase/dbFunctions"
import Post from "./Post"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import NoAccessToFeed from "./NoAccessToFeed"
import { useSelector, useDispatch } from "react-redux"
import { setAllPosts } from "../redux/actions"
import ListGroupInFeed from "./ListGroupInFeed"

const Feed = props => {
  const [showFeed, setShowFeed] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [renderImages, setRenderImages] = useState(2)
  const classes = useStyles()
  const user = useSelector(state => state.user)
  const feed = useSelector(state => state.feed)
  const groups = useSelector(state => state.groups)
  const dispatch = useDispatch()
  let count = 0

  const renderNextImages = i => {
    setRenderImages(i + 2)
  }

  useEffect(() => {
    if (props.gotLatestPost && groups && groups.length) {
      if (props.latestValidPost) {
        setShowFeed(true)
        const groupIds = groups.map(group => group.id)
        getAllPosts(groupIds).then(posts => {
          dispatch(setAllPosts(posts))
        })
      } else {
        setShowFeed(false)
      }
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [props.latestValidPost, props.gotLatestPost, dispatch, groups])

  //Todo this is a quickfix remove updatefeed from pagelayout
  // replace this with redux or something
  useEffect(() => {
    //ugly quickfix since it's 0 first time it won't update
    if (props.updateFeed && groups && groups.length) {
      const groupIds = groups.map(group => group.id)
      getAllPosts(groupIds).then(posts => dispatch(setAllPosts(posts)))
      setShowFeed(true)
    }
  }, [props.updateFeed, user, dispatch, groups])

  const renderFeed = () => {
    count++
    return groups.map((group, i) => renderGroupSection(group, i))
  }

  const renderGroupSection = (group, i) => {
    return (
      <Fragment key={"key" + i}>
        <ListGroupInFeed group={group} />
        {renderPosts(group.id)}
      </Fragment>
    )
  }

  const renderPosts = groupId => {
    const posts = feed.allPosts.filter(post => post.groupId === groupId)
    return posts.map((post, i) => {
      count++
      return (
        <Post
          key={"post" + i}
          renderNextImages={renderNextImages}
          renderImages={renderImages}
          index={count}
          post={post}
        />
      )
    })
  }

  return (
    <div className={classes.feedWrapper}>
      <div className={classes.feedTopDiv} />

      {isLoading ? (
        <Typography variant="subtitle1">loading</Typography>
      ) : showFeed ? (
        renderFeed()
      ) : (
        <NoAccessToFeed />
      )}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  feedWrapper: {
    flexDirection: "column",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    backgroundColor: theme.palette.background.main
  },
  feedTopDiv: {
    scrollSnapAlign: "end"
  }
}))

export default Feed
