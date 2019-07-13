import React, { useState, useEffect } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getImageUrlOnRef } from "../firebase/dbFunctions.js"
import { makeStyles } from "@material-ui/styles"

const FeedImage = props => {
  const [imageUrl, setImageUrl] = useState("")
  useEffect(() => getImageUrl(props.imageRef), [props.imageRef])
  const classes = useStyles()

  const getImageUrl = imageRef => {
    getImageUrlOnRef(imageRef).then(url => setImageUrl(url))
  }

  return (
    <div className={classes.imgDiv}>
      <ExifOrientationImg
        styles={"image-orientation: from-image"}
        width="100%"
        height="auto"
        src={imageUrl}
        alt="image post"
        className={classes.img}
      />
    </div>
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
  }
}))

export default FeedImage
