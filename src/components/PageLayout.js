import React, { useState, useEffect, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed/Feed"
import CustomSideDrawer from "./SideDrawer/CustomSideDrawer"
import Camera from "./Camera"
import {
  uploadImage,
  latestTimeValidPost,
  saveFCMToken,
  joinGroup,
} from "../firebase/dbFunctions"
import LoginPage from "./LoginPage"
import { compressImage } from "../utils"
import { setLatestValidPost, setGotLatestPost } from "../redux/actions"

const PageLayout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")
  const [showUploadLoader, setShowUploadLoader] = useState(false)
  const [updateFeed, setUpdateFeed] = useState(0)
  const classes = useStyles()
  const user = useSelector((state) => state.user)
  const groups = useSelector((state) => state.groups)
  const { latestValidPost } = useSelector((state) => state.latestValidPost)
  const dispatch = useDispatch()

  const toggleDrawer = (openSideDrawer) => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  useEffect(() => {
    if (user.authenticated && props.FCMToken) {
      saveFCMToken(props.FCMToken, user.data.uid)
    }
  }, [user, props.FCMToken]) //Todo FCMToken in redux

  useEffect(() => {
    const url = new URL(window.location.href)
    const groupId = url.searchParams.get("groupId")

    if (groupId && user.authenticated) {
      window.history.pushState({}, "", "/paiweb")
      joinGroup(groupId, user.data)
    }
  }, [user, user.authenticated])

  const handleFile = (event) => {
    var file = event.target.files[0]
    if (!file && user.authenticated) return
    setShowUploadLoader(true)
    const groupIds = extractGroupId(groups)
    compressImage(file, (file) => {
      setimagePreviewUrl(URL.createObjectURL(file))
      uploadImage(file, user.data, groupIds, uploadImageCallback)
    })
  }
  const extractGroupId = (groups) => {
    return groups.map((group) => group.id)
  }

  const uploadImageCallback = () => {
    setShowUploadLoader(false)
    setUpdateFeed(updateFeed + 1)
    latestTimeValidPost(user.data.uid).then((post) => {
      dispatch(setLatestValidPost(post))
      dispatch(setGotLatestPost(true))
    })
  }

  return (
    <div className={classes.App}>
      <CustomAppBar />

      {user.authenticated ? (
        <Fragment>
          <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
          <Feed imagePreviewUrl={imagePreviewUrl} updateFeed={updateFeed} />
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

const useStyles = makeStyles((theme) => ({
  App: {
    minHeight: "100vh",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "800px",
    width: "100%",
  },
}))

export default PageLayout
