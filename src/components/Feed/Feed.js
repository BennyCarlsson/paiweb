import React, { useEffect, useState, Fragment } from "react"
import { getAllPosts } from "../../firebase/dbFunctions"
import Post from "../Post/Post"
import { makeStyles } from "@material-ui/styles"
import NoAccessToFeed from "./NoAccessToFeed"
import { useSelector, useDispatch } from "react-redux"
import { setAllPosts } from "../../redux/actions"
import ListGroupInFeed from "./ListGroupInFeed"
import LoadingPost from "../Post/LoadingPost"

const Feed = (props) => {
  const [showFeed, setShowFeed] = useState(true)
  const classes = useStyles()
  const user = useSelector((state) => state.user)
  const feed = useSelector((state) => state.feed)
  const groups = useSelector((state) => state.groups)
  const { latestValidPost, gotLatestPost } = useSelector(
    (state) => state.latestValidPost
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (gotLatestPost && groups && groups.length) {
      if (latestValidPost) {
        setShowFeed(true)
      } else {
        setShowFeed(false)
      }
    }
  }, [latestValidPost, gotLatestPost, dispatch, groups])

  //Todo this is a quickfix remove updatefeed from pagelayout
  // replace this with redux or something
  useEffect(() => {
    //ugly quickfix since it's 0 first time it won't update
    if (props.updateFeed && groups && groups.length) {
      const groupIds = groups.map((group) => group.id)
      getAllPosts(groupIds).then((posts) => dispatch(setAllPosts(posts)))
      setShowFeed(true)
    }
  }, [props.updateFeed, user, dispatch, groups])

  const renderFeed = () => {
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

  const renderPosts = (groupId) => {
    const posts = feed.allPosts.filter((post) => post.groupId === groupId)
    if (feed.loading) return <LoadingPost />
    return posts.map((post, i) => {
      return <Post key={"post" + i} post={post} />
    })
  }

  return (
    <div className={classes.feedWrapper}>
      <div className={classes.feedTopDiv} />

      {showFeed ? renderFeed() : <NoAccessToFeed />}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  feedWrapper: {
    flexDirection: "column",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    backgroundColor: theme.palette.background.main,
  },
  feedTopDiv: {
    scrollSnapAlign: "end",
  },
}))

export default Feed
