import React, { useState, useEffect } from "react"
import { getImageUrlOnRef } from "../firebase/dbFunctions.js"
import { makeStyles } from "@material-ui/styles"
import Img from "react-image"
import VisibilitySensor from "react-visibility-sensor"
import CircularProgress from "@material-ui/core/CircularProgress"

const FeedImage = props => {
  const [imageUrl, setImageUrl] = useState("")
  const [shouldRenderImage, setShouldRenderImage] = useState(false)
  useEffect(() => getImageUrl(props.imageRef), [props.imageRef])
  const classes = useStyles()

  const getImageUrl = imageRef => {
    getImageUrlOnRef(imageRef).then(url => setImageUrl(url))
  }

  function onChange(isVisible) {
    setShouldRenderImage(isVisible)
    if (isVisible) {
      props.renderNextImages(props.index)
    }
  }

  const renderImage = () => {
    if (props.index <= props.renderImages) {
      return (
        <Img
          width="100%"
          height="auto"
          src={imageUrl}
          alt="image post"
          className={classes.img}
          loader={
            <div className={classes.progressWrapper}>
              <CircularProgress className={classes.progress} />
            </div>
          }
        />
      )
    }
    return ""
  }
  return (
    <VisibilitySensor onChange={onChange} active={!shouldRenderImage}>
      <div className={classes.imgDiv}>{renderImage()}</div>
    </VisibilitySensor>
  )
}

const useStyles = makeStyles(theme => ({
  imgDiv: {
    borderRadius: "4px",
    minHeight: "250px",
    maxHeight: "75vh",
    maxWidth: "450px",
    overflow: "hidden"
  },
  img: {
    borderRadius: "4px",
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  progressWrapper: {
    widh: "100%",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  progress: {
    color: theme.palette.color.main
  }
}))

export default FeedImage
