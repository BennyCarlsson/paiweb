import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed"
import CustomSideDrawer from "./CustomSideDrawer"
import Camera from "./Camera"
import {
  uploadImage,
  latestTimeValidPost,
  saveFCMToken
} from "../firebase/dbFunctions"
import LoginPage from "./LoginPage"
import { AuthContext } from "../AuthContext"
import { compressImage } from "../utils"

const PageLayout = props => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")
  const [authContext, setAuthContext] = useState({})
  const [latestValidPost, setLatestValidPost] = useState()
  const [gotLatestPost, setGotLatestPost] = useState(false)
  const [showUploadLoader, setShowUploadLoader] = useState(false)
  const classes = useStyles()

  const setterAuthContext = authContext => {
    setAuthContext(authContext)
  }
  const toggleDrawer = openSideDrawer => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  useEffect(() => {
    const getLatestValidPost = () => {
      if (!authContext.authenticated) return
      latestTimeValidPost(authContext.user.uid).then(post => {
        setLatestValidPost(post)
        setGotLatestPost(true)
      })
    }
    getLatestValidPost()
  }, [authContext])

  useEffect(() => {
    if (authContext.authenticated && props.FCMToken) {
      saveFCMToken(props.FCMToken, authContext.user.uid)
    }
  }, [authContext, props.FCMToken])

  const handleFile = event => {
    var file = event.target.files[0]
    if (!file && authContext.authenticated) return
    setShowUploadLoader(true)
    compressImage(file, file => {
      setimagePreviewUrl(URL.createObjectURL(file))
      uploadImage(file, authContext.user, () => setShowUploadLoader(false))
    })
  }

  return (
    <div className={classes.App}>
      <AuthContext.Provider value={authContext}>
        <CustomAppBar setAuthContext={setterAuthContext} />
        <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
        {authContext.authenticated ? (
          <Feed
            imagePreviewUrl={imagePreviewUrl}
            latestValidPost={latestValidPost}
            gotLatestPost={gotLatestPost}
          />
        ) : (
          <LoginPage setAuthContext={setterAuthContext} />
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
      </AuthContext.Provider>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  App: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "800px",
    width: "100%"
  }
}))

export default PageLayout
