import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed"
import CustomSideDrawer from "./CustomSideDrawer"
import Camera from "./Camera"
import { uploadImage } from "../firebase/dbFunctions"
import LoginPage from "./LoginPage"
import { AuthContext } from "../AuthContext"
import { compressImage } from "../utils"

const PageLayout = props => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")
  const [authContext, setAuthContext] = useState({})

  const classes = useStyles()

  const setterAuthContext = authContext => {
    setAuthContext(authContext)
  }
  const toggleDrawer = openSideDrawer => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  const handleFile = event => {
    var file = event.target.files[0]
    if (!file && authContext.authenticated) return
    compressImage(file, file => {
      setimagePreviewUrl(URL.createObjectURL(file))
      uploadImage(file, authContext.user)
    })
  }

  return (
    <div className={classes.App}>
      <AuthContext.Provider value={authContext}>
        <CustomAppBar setAuthContext={setterAuthContext} />
        <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
        {authContext.authenticated ? (
          <Feed imagePreviewUrl={imagePreviewUrl} />
        ) : (
          <LoginPage setAuthContext={setterAuthContext} />
        )}
        <CustomBottomAppBar
          toggleDrawer={toggleDrawer}
          camera={<Camera handleFile={handleFile} />}
        />
      </AuthContext.Provider>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  App: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }
}))

export default PageLayout