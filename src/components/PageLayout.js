import React, { useState } from "react"
import CustomAppBar from "./CustomAppBar"
import CustomBottomAppBar from "./CustomBottomAppBar"
import Feed from "./Feed"
import CustomSideDrawer from "./CustomSideDrawer"
import Camera from "./Camera"

const PageLayout = props => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")

  const toggleDrawer = openSideDrawer => () => {
    setOpenSideDrawer(openSideDrawer)
  }

  const handleFile = event => {
    if (!event.target.files[0]) return
    setimagePreviewUrl(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div className="App">
      <CustomAppBar />
      <CustomSideDrawer open={openSideDrawer} toggleDrawer={toggleDrawer} />
      <Feed imagePreviewUrl={imagePreviewUrl} />
      <CustomBottomAppBar
        toggleDrawer={toggleDrawer}
        camera={<Camera handleFile={handleFile} />}
      />
    </div>
  )
}

export default PageLayout
