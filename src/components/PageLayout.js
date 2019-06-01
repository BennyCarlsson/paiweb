import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed"
import CustomSideDrawer from "./CustomSideDrawer"
import Camera from "./Camera"
import { uploadImage } from "../firebase/dbFunctions"
import LoginPage from "./LoginPage"

const PageLayout = props => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")
  const classes = useStyles()

  const toggleDrawer = openSideDrawer => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  const handleFile = event => {
    var file = event.target.files[0]

    if (!file) return
    setimagePreviewUrl(URL.createObjectURL(file))
    uploadImage(file)
  }

  return (
    <div className={classes.App}>
      <CustomAppBar />
      <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
      <LoginPage />
      <Feed imagePreviewUrl={imagePreviewUrl} />
      <CustomBottomAppBar
        toggleDrawer={toggleDrawer}
        camera={<Camera handleFile={handleFile} />}
      />
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
