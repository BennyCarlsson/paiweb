import React, { useState, useEffect, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed"
import CustomSideDrawer from "./CustomSideDrawer"
import Camera from "./Camera"
import {
  uploadImage,
  latestTimeValidPost,
  saveFCMToken,
  joinGroup,
  getUserGroups
} from "../firebase/dbFunctions"
import LoginPage from "./LoginPage"
import { compressImage } from "../utils"
import { setGroups } from "../redux/actions"

const PageLayout = props => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")

  const [latestValidPost, setLatestValidPost] = useState()
  const [gotLatestPost, setGotLatestPost] = useState(false)
  const [showUploadLoader, setShowUploadLoader] = useState(false)
  const [updateFeed, setUpdateFeed] = useState(0)
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const groups = useSelector(state => state.groups)

  const toggleDrawer = openSideDrawer => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  useEffect(() => {
    const getLatestValidPost = () => {
      if (!user.authenticated) return
      latestTimeValidPost(user.data.uid).then(post => {
        setLatestValidPost(post)
        setGotLatestPost(true)
      })
    }
    getLatestValidPost()
  }, [user])

  useEffect(() => {
    if (user.authenticated && props.FCMToken) {
      saveFCMToken(props.FCMToken, user.data.uid)
    }
  }, [user, props.FCMToken]) //Todo FCMToken in redux

  useEffect(() => {
    const url = new URL(window.location.href)
    const groupId = url.searchParams.get("groupId")

    if (groupId && user.authenticated) {
      window.history.pushState({}, "", "/")
      joinGroup(groupId, user.data)
    }
  }, [user, user.authenticated])

  useEffect(() => {
    if (user.authenticated && user.data) {
      getUserGroups(user.data.uid).then(groups => {
        dispatch(setGroups(groups))
      })
    }
  }, [user, dispatch])

  const handleFile = event => {
    var file = event.target.files[0]
    if (!file && user.authenticated) return
    setShowUploadLoader(true)
    const groupIds = extractGroupId(groups)
    compressImage(file, file => {
      setimagePreviewUrl(URL.createObjectURL(file))
      uploadImage(file, user.data, groupIds, uploadImageCallback)
    })
  }
  const extractGroupId = groups => {
    return groups.map(group => group.id)
  }

  const uploadImageCallback = () => {
    setShowUploadLoader(false)
    setUpdateFeed(updateFeed + 1)
    latestTimeValidPost(user.data.uid).then(post => {
      setLatestValidPost(post)
      setGotLatestPost(true)
    })
  }

  return (
    <div className={classes.App}>
      <CustomAppBar />

      {user.authenticated ? (
        <Fragment>
          <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
          <Feed
            imagePreviewUrl={imagePreviewUrl}
            latestValidPost={latestValidPost}
            gotLatestPost={gotLatestPost}
            updateFeed={updateFeed}
          />
        </Fragment>
      ) : (
        <LoginPage />
      )}
      <CustomBottomAppBar
        toggleDrawer={toggleDrawer}
        camera={
          <Camera
            showUploadLoader={showUploadLoader}
            handleFile={handleFile}
            latestValidPost={latestValidPost}
          />
        }
      />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  App: {
    minHeight: "100vh",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "800px",
    width: "100%"
  }
}))

export default PageLayout
